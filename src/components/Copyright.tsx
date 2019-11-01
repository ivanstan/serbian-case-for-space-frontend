import React from 'react';

export function Copyrigth() {
  return <span>Copyright © {window.location.hostname} {new Date().getFullYear()}</span>
}
