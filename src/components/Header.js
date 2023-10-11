import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header--link">Home.</Link>
      <Link to="/about" className="header--link">About.</Link>
      <Link to="/events" className="header--link">Events.</Link>
      <Link to="/contact" className="header--link">Contact.</Link>
    </div>
  )
}
