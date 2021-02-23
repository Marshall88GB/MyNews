import React  from 'react'

import ContactForm from '../../components/Contact_form/contact-form.component';

import {ContactMeWrapper} from './contact-me.styles'

const Contact = ()=>(
   <ContactMeWrapper className=" border-gradient border-gradient-purple">
   <ContactForm />

</ContactMeWrapper>

   )
export default Contact;