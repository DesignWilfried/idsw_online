import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  // L'état initial du conteneur (caché ou au début de l'animation)
  hidden: { opacity: 0 },
  
  // L'état animé du conteneur
  visible: {
    opacity: 1,
    transition: {
      // 🚨 Délai entre l'animation de chaque enfant
      staggerChildren: 0.09, // Chaque lettre animera 0.08s après la précédente
    },
  },
};

const itemVariants = {
  // État initial de chaque lettre
  hidden: { y: 20, opacity: 0,rotate:0 }, // Commence 20px plus bas et transparent
  
  // État animé de chaque lettre
  visible: { y: 0, opacity: 1,rotate:0 }, // Remonte à sa position normale et devient opaque
};

export const AnimatedTitle=({ text,style })=> {
  // Transforme le texte en un tableau de lettres
  const letters = Array.from(text);

  return (
    <motion.h1
      // Appliquer les variations du conteneur
      variants={containerVariants}
      className={`${style}`}
      // L'état initial
      initial="hidden" 
      
      // L'état vers lequel animer
      animate="visible" 
      
    //   style={{ 
    //     display: 'flex', // Permet aux lettres d'être côte à côte malgré le positionnement
    //     overflow: 'hidden', // Cache les lettres quand elles sont en dehors du champ
    //     fontSize:'70px',
    //     fontWeight: 'bold'
    //   }}
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} // Clé unique pour chaque lettre
          variants={itemVariants} // Appliquer les variations de l'enfant
          style={{ display: 'inline-block' }} // Chaque span doit être inline-block
          className='shadow-lg'
        >
          {letter === " " ? "\u00A0" : letter} {/* Gère les espaces non-cassables */}
        </motion.span>
      ))}
    </motion.h1>
  );
}