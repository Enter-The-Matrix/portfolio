import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!firstName || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
  
    try {
      const templateParams = {
        name: firstName + lastName,
        email: email,
        message: message,
        newsletterCheckbox: newsletter ? "Subscribed" : "Not Subscribed",
      };
  
      console.log(templateParams);
      
      const response = await emailjs.send(
        "service_x69zdbk",
        "template_5v8bewh",
        templateParams,
        "Wn6xcRs4DjdHgiL85"
      );
  
      console.log("Email sent successfully:", response);

      if(response.status=="200"){
        toast.success("Email sent successfully");
      }
      else{
        toast.error("Email not sent due to some error");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setNewsletter(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div id="contact" className="md:px-20 mt-10 md:mt-20 font-semibolds">
      <h1 className="text-4xl mb-6 text-ends md:text-start text-primary text-glow">
        Contact
      </h1>
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-200">
            Get In <span className="text-primary">Touch</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
                                  focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
                                 focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border
                                 border-gray-200 rounded py-3  px-4 mb-3 leading-tight focus:outline-none
                                  focus:bg-white focus:border-gray-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input
                    id="checkbox"
                    className="mr-2 leading-tight"
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                  />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className=" bg-primary  py-2 px-2 focus:shadow-outline focus:outline-none
                 text-black font-bold md:py-2 md:px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
