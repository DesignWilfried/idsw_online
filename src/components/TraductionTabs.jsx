import React, { useState } from 'react';
import {
     Button,
     message,
     Steps, 
     theme,
     Form,
     Flex,
     Input,
     Row,
     Col,Checkbox,Upload, } from 'antd';
import { MailOutlined, UserOutlined,InboxOutlined } from '@ant-design/icons';
import axios from "axios"
import { progress } from 'framer-motion';

const {Dragger}=Upload;
const API_URL="http://localhost:5500/api/v1/send-email/";

const TranductionTab=({handleClick,style})=>{
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  
  const [selectedFile,setSelectedFile]=useState(null);
  const [recipientEmail,setRecipientEmail]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

  const Valider=async()=>{
    handleClick();
    setCurrent(0); 
  }

  //fonction pour gere le fichier
 const customRequest=async(options)=>{
  const {file,onSuccess,onError,onProgress}=options;
  const formData=new FormData();
    formData.append('name',name);
    formData.append('pdfFile',file);
    formData.append('recipient',email);
    formData.append('subject','Document joint');
     message.info("Envoi de l'email en cours...");
    try{
        const response= await axios.post(API_URL,formData,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
            //gerer la progression
            onUploadProgress:(progressEvent)=>{
             const percent=Math.round((progressEvent.loaded*100)/progressEvent.total);
             onProgress({percent},file);
        }
        });
        onSuccess(response.data,file);
        message.success("document envoyer avec success");
    }catch(error){
      console.error('Erreur d\'envoi :', error);
      message.error("Erreur lors de l'envoi de l'e-mail. Vérifiez le serveur.");
    }

 };

 const props={
  name:'file',
  multiple:true,
  customRequest:customRequest,
 };

 //valeur input
const handleName=(e)=>{
  const nouveauNom=e.target.value;
  setName(nouveauNom);
  console.log(name);
}
const handleEmail=(e)=>{
  const nouvelleEmail=e.target.value;
  setEmail(nouvelleEmail);
  console.log(email)
}
  const onFinish = async(values) => {
    next()
    };
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    setSelectedFile(e.fileList[0])
    return e?.fileList;
    };

const steps = [
  // {
  //   title: <p className={`${current===0?"text-white":"hidden"}`}>Choix du document</p>,
  //   content: <Form
  //   name='validate_other'
  //   onFinish={onFinish}
  //   onFinishFailed={onFinishFailed}
  //   style={{maxWidth:600}}
  //   >
  //   <Form.Item name="checkbox-group" style={{color:"white",marginTop:20}} label="Document">
  //     <Checkbox.Group>
  //       <Row>
  //         <Col span={8}>
  //           <Checkbox value="Acte de Naissance" style={{ lineHeight: '32px', color: token.colorBorder, }}>
  //             Acte de Naissance
  //           </Checkbox>
  //         </Col>
  //         <Col span={8}>
  //           <Checkbox value="Diplome" style={{ lineHeight: '32px', color: token.colorBorder }}>
  //             Diplome
  //           </Checkbox>
  //         </Col>
  //         <Col span={8}>
  //           <Checkbox value="Attestation de Stag" style={{ lineHeight: '32px', color: token.colorBorder }}>
  //             Attestation de Stage
  //           </Checkbox>
  //         </Col>
  //         <Col span={8}>
  //           <Checkbox value="Carte d'identite" style={{ lineHeight: '32px', color: token.colorBorder, }}>
  //             Carte d'identite
  //           </Checkbox>
  //         </Col>
  //         <Col span={8}>
  //           <Checkbox value="Passport" style={{ lineHeight: '32px', color: token.colorBorder,opacity:1 }}>
  //             Passport
  //           </Checkbox>
  //         </Col>
  //         <Col span={8}>
  //           <Checkbox value="Autres" style={{ lineHeight: '32px',color:token.colorBorder}}>
  //             Autres
  //           </Checkbox>
  //         </Col>
  //       </Row>
  //     </Checkbox.Group>
  //   </Form.Item>
  //   <Form.Item label={null}>
  //     <Button type="primary" htmlType="submit">
  //       Valide
  //     </Button>
  //   </Form.Item>
  //   </Form>
  // },
  {
    title: <p className={`${current===1?"text-white":"hidden"}`}>Entrez vos Informations</p>,
    content: <Form
    colon
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 12 }}
    style={{ maxWidth: 600,marginTop:20 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nom"
      name="name"
      style={{colorLabel:token.colorWhite}}
      rules={[{ required: true, message: 'svp entrez votre Nom!' }]}
    >
      <Input suffix={<UserOutlined />} placeholder='Entrez votre Nom' value={name} onChange={handleName}/>
    </Form.Item>

     <Form.Item
      label="E-MAIL"
      className='text-white'
      name="email"
      rules={[{ required: true, message: 'svp entrez votre email!' }]}
    >
      <Input type='email' suffix={<MailOutlined />} placeholder='Entrez votre email' value={email} onChange={handleEmail}/>
    </Form.Item>
    <Form.Item label="Importer" className='text-white'>
      <Form.Item 
      name="dragger" 
      valuePropName="fileList" 
      getValueFromEvent={normFile}
       noStyle
       rules={[{ required: true, message: 'selectionnez le ou les documments' }]}
       >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="text-white">Cliquer ou faire glisser votre document ici</p>
          <p className="text-secondary">un document a la fois.</p>
        </Dragger>
      </Form.Item>
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
    title: <p className={`${current===2?"text-white":"hidden"}`}>Entrer votre email</p>,
    content: <p className="text-white text-[20px] m-[10px]">Vielen Dank fur ihr Vertrauen <strong className="text-secondary">.</strong> </p>
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
}

export default TranductionTab;


// const express = require('express');
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Configuration de Multer pour gérer le fichier dans la mémoire (méthode simple)
// const upload = multer({ storage: multer.memoryStorage() }); 

// // Configuration de Nodemailer (utilisez vos propres identifiants)
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Exemple: service Gmail
//     auth: {
//         user: 'votre_email@gmail.com', // 🚨 VOTRE EMAIL
//         pass: 'votre_mot_de_passe_ou_app_key' // 🚨 VOTRE MOT DE PASSE OU CLÉ D'APPLICATION
//     }
// });

// app.post('/api/send-email', upload.single('pdfFile'), async (req, res) => {
//     // 1. Récupérer les données envoyées par le frontend
//     const recipient = req.body.recipient;
//     const subject = req.body.subject || 'Document joint';
    
//     // 2. Le fichier est disponible dans req.file grâce à Multer
//     const pdfFile = req.file; 

//     if (!pdfFile) {
//         return res.status(400).json({ message: "Aucun fichier PDF n'a été trouvé." });
//     }

//     try {
//         // 3. Configuration de l'e-mail avec la pièce jointe
//         const mailOptions = {
//             from: 'votre_email@gmail.com',
//             to: recipient,
//             subject: subject,
//             html: `<h1>Bonjour,</h1><p>Veuillez trouver le document PDF ci-joint.</p>`,
//             attachments: [
//                 {
//                     filename: pdfFile.originalname,
//                     // Utiliser le buffer du fichier stocké en mémoire
//                     content: pdfFile.buffer, 
//                     contentType: pdfFile.mimetype 
//                 }
//             ]
//         };

//         // 4. Envoi de l'e-mail
//         const info = await transporter.sendMail(mailOptions);
        
//         console.log('E-mail envoyé :', info.response);
//         res.status(200).json({ message: 'E-mail envoyé avec succès.' });

//     } catch (error) {
//         console.error('Erreur Nodemailer :', error);
//         res.status(500).json({ message: 'Échec de l\'envoi de l\'e-mail.', error: error.message });
//     }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Serveur Node.js sur le port ${PORT}`));