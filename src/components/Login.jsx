import React,{useState,useEffect} from "react";
import { Form,Input,Checkbox,Button,message } from "antd";
import { MailOutlined,SolutionOutlined } from "@ant-design/icons";
import axios from "axios";
import emailjs from '@emailjs/browser';

const Login=({isModalOpen,setIsModalOpen})=>{
    const [form]=Form.useForm();
    const [form0]=Form.useForm();
    const [login,setLogin]=useState(false);
    const [connxionUser,setConnxionUser]=useState({
        email:"",
        password:""
    });
    const [logUser, setLogUser] = useState({
        nom:"",
        prenom:"",
        email:"",
        password:""
    });
    const signUpUrl="http://localhost:3001/api/v1/etudiants";
    const signInUrl="http://localhost:3001/api/v1/etudiants/sign-in";
    const onFinish1=async(values)=>{
        try {
             if(values.password!==values.confirm){
            return message.error("entrer le meme mots de passe dans confirm");
        }else{
            setLogUser({
                ...logUser,
                nom:values.nom,
                prenom:values.prenom,
                email:values.email,
                password:values.password    
            });
                const response=await axios.post(signUpUrl,values);
                 const messageMail = await emailjs.send("service_2boqrzp", "template_jz5wc5p",{name:values.nom,email:values.email}, "LgftcGL1BlVrmrvcv");
                 console.log('Email envoyé:', messageMail.status, messageMail.text);
                localStorage.setItem("userToken",response.data.data.token);
                window.location.reload();
        }
        setIsModalOpen(false)
        form.resetFields();
        } catch (error) {
           message.error("Erreur d'inscription. Veuillez réessayer.");
           setIsModalOpen(false);
           console.error("Erreur lors de la soumission du formulaire:", error); 
        }
    }
    const onFinish0 = async(values) => {
        try {
            setConnxionUser({
                ...connxionUser,
                email:values.email0,
                password:values.password0
             });
            const response=await axios.post(signInUrl,values);
            message.success("connexion reussie");
            localStorage.setItem("userToken",response.data.data.token);
            window.location.reload();
            } 
        catch (error) {
                message.error("Erreur de connexion. Vérifiez vos identifiants.");
                setIsModalOpen(false);
                console.error("Erreur lors de la soumission du formulaire:", error);
            }
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };
    const initvalue=()=>
    {
        form.resetFields();
       // form0.resetFields();
    }
    initvalue();
    return (
        <div
            className="background-container glass-card py-7"
        >
        {login?(
            <Form
            name="connexion"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: false }}
            onFinish={onFinish0}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'svp entrer votre email!' }]}
            >
                <Input type="email"  placeholder="entrer votre email" />
                </Form.Item>
                
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'svp entrer votre mot de passe' }]}
                >
                <Input.Password placeholder="entrer votre mot de passe"/>
                </Form.Item>
                
                <Form.Item name="remember" valuePropName="checked" label={null}>
                <div className="">
                <Checkbox>se souvenir de moi</Checkbox>
                <Button type="link" onClick={()=>setLogin((prev)=>!prev)}>
                    <SolutionOutlined/>
                    pas encore enregistre</Button>
                    </div>
                </Form.Item>
                
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Form>):
                <Form
                    name="enregistrer"
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish1}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                <Form.Item
                    label="Nom"
                    name="nom"
                    rules={[{ required: true, message: 'svp entrer votre nom' }]}
                >
                <Input placeholder="entrer votre nom" />
                </Form.Item>
                <Form.Item
                    label="Premon"
                    name="prenom"
                    rules={[{ required: true, message: 'svp entrer votre prenom' }]}
                >
                <Input placeholder="entrer votre prenom" />
                </Form.Item>
                {/* email user */}
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'svp entrer votre email' }]}
                >
                <Input type="email" suffix={<MailOutlined/>} placeholder="entrer votre email" />
                </Form.Item>
                <Form.Item
                label="mot passse"
                name="password"
                rules={[{ required: true, message: 'svp entrer votre mot de passe' }]}
                >
                <Input.Password placeholder="entrer votre mot de passe"/>
                </Form.Item>
                <Form.Item
                label="Confirm"
                name="confirm"
                rules={[{ required: true, message: 'svp entrer votre mot de passe' }]}
                >
                <Input.Password placeholder="entrer votre mot de passe"/>
                </Form.Item>
                
                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <div className="">
                    <Checkbox>se souvenir de moi</Checkbox>
                    <Button type="link" onClick={()=>setLogin((prev)=>!prev)}>
                        <SolutionOutlined/>
                            deja enregistre</Button>
                    </div>
                </Form.Item>
                
                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
        </Form>}                 
    </div>
    )
}

export default Login;