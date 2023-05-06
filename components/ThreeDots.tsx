const ThreeDots = () => {
    return (
        <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
            <style global jsx>{`
      .loading-dots {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .loading-dots span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 3px;
        background-color: gray;
        border-radius: 50%;
        animation: loading 1s infinite;
      }
      
      @keyframes loading {
        0% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.1);
        }
        100% {
          opacity: 0.3;
          transform: scale(1);
        }
      }
      `}</style>
        </div>
    )
}

export default ThreeDots