import React from 'react'
import useOnlineStatus from '../Utils/useOnlineStatus'

const OnlineStatus = () => {
    const onlineStatus = useOnlineStatus(true);
    const onlineStatusText = onlineStatus ? "Good Internet Connection." : "You are Offline."
    const className = onlineStatus ? "green-dot" : "red-dot";
  return ( <div className='online-status-container'>
          <div className={className}></div>
          {onlineStatusText}
      </div>
  )
}

export default OnlineStatus