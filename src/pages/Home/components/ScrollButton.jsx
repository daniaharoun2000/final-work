import {useEffect} from 'react';
import svgg from'../images/topIcon.svg';
export default function ScrollButton() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
    
    
      <button className='bg-primary  scroolbutton'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
      
          bottom: '40px',
          right: '40px',
          color: '#fff',
          border:'#699',
       
        width:'1'
        }}
      >
       <img
                    src={svgg}
                    className=" iconn  align-items-center "
                    alt="img"
                  />
      </button>
    </div>
  );
}
