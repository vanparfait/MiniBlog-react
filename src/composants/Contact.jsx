import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contactez nous</h1>
      <form action="">
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea> <br />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
