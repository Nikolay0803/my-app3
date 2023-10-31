import React, { useEffect } from 'react'

function UnmountComponent() {
    useEffect(() => {
      return () => {
        console.log("componentWillUnmount useEffect");
      };
    }, []);
  return (
    <div>UnmountComponent</div>
  )
}

export default UnmountComponent