import React, { useState } from 'react';
import { Button, message, Steps, theme,Form,Flex,Input,Select } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios"

const API_URL="http://localhost:5500/api/v1/etudiants/";



const Tabs = ({handleClick}) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [center,setCenter]=useState("");
  const [user,setUser]=useState({
    name:"",
    subName:"",
    email:"",
    niveau:"",
    center:"",
  });
  const Valider=async()=>{
    handleClick();
    setCurrent(0);
    try{
        const response=await axios.post(API_URL,user);
        if(response){
          message.success("vous etez enregistre");
        } 
    }catch(error){
        message.error("erreur lors de l'envoi de vos donnees")
    }
    
  }
  const onFinish = values => {
    next()
    setUser({
        ...user,
        name:values.name,
        subName:values.subName,
        email:values.email,
        center:center
    });
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };
    //select value
    const onChange=value=>{
      setCenter(value)
      console.log(`selected ${value}`);
    }
    const onSearch=value=>{
      setCenter(value);
      console.log('search',value);
    }
    const options=[
      {
        value: 'Yaounde-Tsinga',
        label: 'Yaounde-Tsinga',
      },
      {
        value: 'Douala',
        label: 'Douala',
      },
      {
        value: 'Bertoua',
        label: 'Bertoua',
      },
    ];

const steps = [
  {
    title: <p className={`${current===0?"text-dimBlue":"hidden"}`}>Choix du niveau</p>,
    content: <div className="flex justify-center m-4">
            <Flex gap="small">
                <Button onClick={
                    (event) =>{ 
                        const value=event.target.textContent;
                        setUser({...user,niveau:value});
                        next()}} 
                    color="default" variant='outlined'>A1</Button>
                <Button onClick={
                    (event) =>{ 
                        const value=event.target.textContent;
                        setUser({...user,niveau:value});
                        next()}} color="default" variant='outlined'>A2</Button>
            </Flex>
            <Flex gap="small" className='mr-2 ml-4' >
                <Button onClick={
                    (event) =>{ 
                        const value=event.target.textContent;
                        setUser({...user,niveau:value});
                        next()}} color="default" variant='outlined'>B1</Button>
                <Button onClick={
                    (event) =>{ 
                        const value=event.target.textContent;
                        setUser({...user,niveau:value});
                        next()}} color="default" variant='outlined'>B2</Button>
            </Flex>
            <Flex gap="small">
                <Button onClick={
                    (event) =>{ 
                        const value=event.target.textContent;
                        setUser({...user,niveau:value});
                        next()}} color="default" variant='outlined'>C1</Button>
            </Flex>
        </div>,
  },
  {
    title: <p className={`${current===1?"text-dimBlue":"hidden"}`}>Entrer votre nom</p>,
    content: <Form
    colon
    name="basicIN"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 12 }}
    style={{ maxWidth: 700,marginTop:20 ,color:token.colorTextLabel}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label= "Nom"
      name="name"
      
      rules={[
        { required: true, message: 'svp entrez votre Nom!' },
      //     {
      //   // 👈 Utilisation de la nouvelle Regex
      //   pattern: cameroonPhoneRegex, 
      //   message: "Le numéro doit commencer par +237 et contenir 9 chiffres."
      // }
      ]}
    >
      <Input suffix={<UserOutlined />} placeholder='Entrez votre Nom'/>
    </Form.Item>

    <Form.Item
      label="Prenom"
      name="subName"
      rules={[{ required: true, message: 'stp entrez votre Prenom!' }]}
    >
      <Input suffix={<UserOutlined />} placeholder='entrez votre prenom'/>
    </Form.Item>
     <Form.Item
      label="E-MAIL"
      className='text-white'
      name="email"
      rules={[{ required: true, message: 'svp entrez votre email!' }]}
    >
      <Input type='email' suffix={<MailOutlined />} placeholder='Entrez votre Nom'/>
    </Form.Item>
    <Form.Item
    name="center"
    label="centre"
    rules={[{required:true,message:"Entrer votre centre"}]}
    >
      <Select
      showSearch
      placeholder="Selectionner votre centre"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={options}
  />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Valide
      </Button>
    </Form.Item>
  </Form>
  },
  {
    status: 'process',
    title: <p className={`${current===2?"text-dimBlue":"hidden"}`}>Entrer votre email</p>,
    content: <p className="text-white text-[20px] m-[10px]">Willkommen bei IDSW_online {user.nom}</p>
  },
];

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));
  const contentStyle = {
    textAlign: 'center',
    width:"80%",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps
      percent={60}
       type="navigation"
       responsive
       current={current}
       direction="horizontal" 
       className="md:flex hidden text-white"

       items={items} 
       />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current==steps.length - 1 && (
          <Button type="primary" htmlType="submit" onClick={() => Valider()}>
            valider
          </Button>)}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Retour
          </Button>
        )}
      </div>
    </>
  );
};
export default Tabs;