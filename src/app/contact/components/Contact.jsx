import React from 'react'
import ContactForm from './ContactForm'
import Address from './Address'

export default function Contact({styles}) {
  return (
    <div className={styles?.ContactContainer}>
      <ContactForm style={styles}/>
      <Address styles={styles}/>
    </div>
  )
}
