import React from 'react'

export default function Logout() {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
  return (
    <div>

      <h6>You have logged out</h6>
      <img src='https://thumbs.dreamstime.com/b/thank-you-lettering-blurred-lights-background-thank-you-lettering-102011881.jpg' alt='thank you' />

      <h2>Thank You</h2></div>
  )
}
