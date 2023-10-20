export const StyledButton = ({ content, icon, onClick, outlined }) => {
    const buttonStyles = `inline-flex items-center h-10 px-5 text-violet-100 transition-colors duration-150 rounded-lg focus:shadow-outline ${
        outlined
          ? 'border border-violet-700 bg-transparent hover:bg-violet-800 hover:border-transparent'
          : 'bg-violet-700 hover:bg-violet-800'
      }`;    

    return (
    <button
        type="button"
        onClick={onClick} 
        className={buttonStyles}
    >
         <div className="flex items-center space-x-2">
            {icon}
            <span>{content}</span>
        </div>
    </button>
    );
};

export const ThemedButton = ({ content, icon, onClick, styleClass }) => {  
    return (
    <button
        type="button"
        onClick={onClick} 
        className={styleClass ? styleClass : 'h-12 hover:scale-105 transition-transform inline-flex items-center px-5 text-violet-100 transition-colors duration-150 rounded-lg focus:shadow-outline'}
        style={{
            // height: '2.5rem', ':hover': {transform: 'scale(1.05)'}, 
            background: 'linear-gradient(to right, #6e5494, #300066, #300066)'}}
    >
        <div className="flex items-center space-x-2">
            {icon}
            <span>{content}</span>
        </div>
    </button>
    );
};

export const PillButton = ({ content, icon, onClick }) => {  
    return (
        <button
        type="button"
        onClick={onClick} 
        className='p-2 hover:scale-105 transition-transform bg-violet-700 hover:bg-violet-800 inline-flex items-center h-10 text-violet-100 transition-colors duration-150 rounded-full focus:shadow-outline'
        style={{background: 'linear-gradient(to right, #6e5494, #300066, #300066)'}}
    >
        <div className="flex items-center space-x-2">
            {icon}
        </div>
    </button>
    
    );
};