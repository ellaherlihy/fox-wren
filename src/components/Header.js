import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Home.</Link>
      <Link to="/about">About.</Link>
      <Link to="/events">Events.</Link>
      <Link to="/contact">Contact.</Link>

    </div>
  )
}
