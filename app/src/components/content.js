import styled from "styled-components";

export const Content = styled.div`
  /* colors */
  --primary-color: black;
  --secondary-color: #666;
  --tertiary-color: #999;
  --quaternary-color: #ddd;
  --dark-bg-text-color: #fff;
  --light-bg-text-color: #000;
  --dark-bg-color: #fff;
  --light-bg-color: #000;
  --link-primary-color: #a9c5ba;

  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }

  width: 100%;
  height: 100vh;
  background-color: ${({ primary }) => primary};
  color: ${({ text }) => text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;

  /* slider */
  .slider-img {
    max-width: 100%;
  }
  .slider-title {
    margin: 30px 0;
  }
  .slider-text {
    max-width: 50%;
    text-align: center;
  }
  .slider-dots {
    display: flex;
    flex-direction: row;

    .dots {
      background-color: var(--dark-bg-text-color);
      padding: 7px;
      margin: 40px 10px;
      opacity: 0.6;
      border-radius: 50%;
    }
    .dot-active {
      opacity: 1;
      width: 40px;
      border-radius: 10px;
    }
  }

  /* Panel */
  .brand-text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: bolder;
    position: absolute;
    top: 100px;
    right: 100px;
  }

  .welcome-text {
    color: var(--tertiary-color);
    font-family: "Roboto", sans-serif;
    width: 100%;
    margin: 20px 0;
    padding: 10px;
    text-align: center;
  }

  form {
    min-width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: 1;
    padding: 10px;
  }

  form * {
    padding: 5px;
  }

  form label {
    width: 100%;
    display: block;
    color: var(--secondary-color);
  }
  form input {
    width: 100%;
    display: block;
    border-bottom: 1px solid #aaa;
    padding: 10px 20px;
    color: var(--primary-color);
    font-size: 1em;

    ::placeholder {
      color: var(--secondary-color);
    }
  }

  form button[type="submit"] {
    margin: 25px auto;
    width: 30%;
    padding: 15px;
    border-radius: 30px;
    background-color: var(--secondary-color);
    color: var(--dark-bg-text-color);
    font-weight: bold;
    font-size: 1em;
  }

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 0 50px 0;
    color: var(--secondary-color);
  }

  hr {
    display: inline;
    padding-top: 1px;
    width: 150px;
    background-color: var(--tertiary-color);
    margin: 0 20px;
  }

  .forgot-password {
    color: var(--secondary-color);
    text-align: right;
    font-size: 14px;
  }

  .google-user {
    width: 60%;
    margin-bottom: 50px;
  }

  .google-user button {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-shadow: 0px 3px 10px 3px var(--quaternary-color);
    border-radius: 30px;
    background-color: var(--dark-bg-color);
    color: var(--light-bg-text-color);
    font-size: 1em;
    font-family: "Roboto", sans-serif;
    width: 50%;
    margin: 0 auto;

    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }

  .tos {
    color: var(--secondary-color);
    text-align: center;
    a {
      text-align: center;
      color: var(--link-primary-color);
    }
  }

  .user-login {
    color: var(--secondary-color);
    text-align: center;
    a {
      text-align: center;
      color: var(--link-primary-color);
    }
  }

  .user-signup {
    color: var(--secondary-color);
    text-align: center;
    a {
      text-align: center;
      color: var(--link-primary-color);
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 1100px) {
    /* Panel */
    .brand-text {
      position: absolute;
      top: 50px;
      right: 50px;
    }
    .welcome-text {
      font-size: 30px;
      text-align: center;
      width: 100%;
    }

    form button[type="submit"] {
      width: 40%;
    }
    .google-user button {
      width: 65%;
      margin-bottom: 25px;
    }
    /* slider */
    .slider-img {
      max-width: 75%;
    }
  }

  @media only screen and (min-width: 100px) and (max-width: 414px) {
    /* panel */
    .brand-text {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 14px;
    }
    .welcome-text {
      font-size: 30px;
      text-align: center;
      width: 80%;
      margin: 0;
    }
    .google-user {
      margin-bottom: 20px;
    }
    .google-user button {
      font-size: 14px;
      width: 100%;
      img {
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }
    }
    .divider {
      margin-bottom: 15px;
    }

    form {
      width: 100%;
    }

    form input {
      padding: 5px 10px;
    }
    form button[type="submit"] {
      width: 50%;
      margin-bottom: 5px;
    }

    /* slider */
    .slider-img {
      max-width: 75%;
    }
    .slider-title {
      font-size: 25px;
    }
    .slider-text {
      max-width: 80%;
      text-align: center;
    }
    .slider-dots {
      display: flex;
      flex-direction: row;

      .dots {
        padding: 5px;
        margin: 30px 10px;
      }
      .dot-active {
        width: 25px;
      }
    }
  }

  @media (orientation: landscape) and (min-device-width: 400px) and (max-device-width: 1290px) {
    height: 900px;
    .brand-text {
      top: 40px;
      right: 5 0px;
    }

    form button[type="submit"] {
      width: 35%;
      margin: 0 auto;
      margin-top: 50px;
    }

    .google-user {
      width: 60%;
      margin: 5px;
    }

    .user-signup {
      margin: 25px;
    }

    .user-login {
      margin: 25px;
    }

    .divider {
      margin: 50px;
    }
  }
`;
