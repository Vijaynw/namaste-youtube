import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2'>

        <div className='flex col-span-2'> 
            <img className='h-8 mx-2 my-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=" alt="" />
            <img className='h-8 mx-2 my-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
        </div>

        <div className='col-span-8'>
          <input className='border h-[40px] w-[500px] rounded-l-full p-2' placeholder= "Search Something !"  type="text" />
          <button className=' mt-2  h-[40px] w-[100px] border rounded-r-full bg-gray-200'>Search</button>
        </div>

        <div className='flex col-span-2'>
           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmb2N1c2FibGU9ImZhbHNlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6TTMgMTJjMC0uNy4wOS0xLjM3LjI0LTIuMDJMOCAxNC43MXYuNzljMCAxLjc2IDEuMzEgMy4yMiAzIDMuNDZ2MS45OGMtNC40OS0uNS04LTQuMzItOC04Ljk0em04LjUgNkMxMC4xMiAxOCA5IDE2Ljg4IDkgMTUuNXYtMS4yMWwtNS40My01LjRDNC44NCA1LjQ2IDguMTMgMyAxMiAzYzEuMDUgMCAyLjA2LjE5IDMgLjUzVjVjMCAuNTUtLjQ1IDEtMSAxaC0zdjJjMCAuNTUtLjQ1IDEtMSAxSDh2M2g2Yy41NSAwIDEgLjQ1IDEgMXY0aDJjLjU1IDAgMSAuNDUgMSAxdi42OUMxNi40MSAyMC4xMiAxNC4zMSAyMSAxMiAyMXYtM2gtLjV6bTcuNDctLjMxQzE4LjgyIDE2LjczIDE4IDE2IDE3IDE2aC0xdi0zYzAtMS4xLS45LTItMi0ySDl2LTFoMWMxLjEgMCAyLS45IDItMlY3aDJjMS4xIDAgMi0uOSAyLTJWMy45NWMyLjk2IDEuNDggNSA0LjUzIDUgOC4wNSAwIDIuMTYtLjc2IDQuMTQtMi4wMyA1LjY5eiIvPjwvc3ZnPg==" alt="" />
        </div>

    </div>
  )
}

export default Head