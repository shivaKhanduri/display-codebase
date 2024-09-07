import { Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className='footer ubBlueBg'>
      <div className='footerContainer'>
        <div className='footerContent'>
          <span className='copyright me-2'>© 2024 UniBud</span>
            <Linkedin color="#0083c5" size={20}/>
        </div>
      </div>
    </footer>
  );
}
