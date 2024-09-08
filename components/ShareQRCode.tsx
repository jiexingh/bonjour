import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode';

const ShareQRCode = ({ value }: {value:string}) => {
    const canvasRef = useRef(null);

    useEffect(() => {    
        QRCode.toCanvas(canvasRef.current, value, { width: 160, margin: 0, }, (error) => {
            if (error) console.error(error);
        });
  }, [value]);

  return (
    <div className='flex flex-col items-center'>
      <canvas ref={canvasRef} className='border rounded-md p-3 shadow-sm'/>
    </div>
  )
}

export default ShareQRCode