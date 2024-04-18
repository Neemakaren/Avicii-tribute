import React from 'react'

const Fun = ({test}) => {
    
  return (
    <div>
        {
            test.map((t) => (
                <>
                <div className='text-white'>{t.name}</div>
                <img src={t.avatar} alt="" />
                </>
            ))
        }
    </div>
  )
}

export default Fun