import { IoMdArrowRoundBack } from "react-icons/io";

export function Contact() {
  return (
    <div className="Contact">
      <div style={{ padding: "2rem", lineHeight: "1.6" }}>
        <h1>My School mates</h1>

        <h2>Team</h2>
        <ul>
        
                <li>Alain</li>
                <li>Sylvia</li>
                <li>Tahiru</li>
            
        </ul>

        

        <h2>About This Project</h2>
        <p>
          This is a travel blog where we share our experiences from different
          places around the world. It was built using React as part of a
          learning project.
        </p>

        <h2>Contact Details</h2>
        <p>
          Hamburg Coding School
          <br />
           Borselstrasse 7 
          <br />
          22765 Hamburg, Germany
          <br />
          Email: contact@hamburgcodingschool.com
          <br />
          Phone: +49 15211935891
        </p>

        <p style={{ fontStyle: "italic", marginTop: "1.5rem" }}>
          This website is a student project from a web development course at
          Hamburg Coding School.
        </p>
        <a href="Go Back"><IoMdArrowRoundBack /></a>
      </div>
    </div>
  );
}
export default Contact;
