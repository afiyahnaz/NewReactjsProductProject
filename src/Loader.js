import LoaderGif from './images/loaderGif.gif'



const Loader = () => {
    return         <div className="loader">
                        <img  width={30} height={30} src={LoaderGif} alt = 'Loader'/>
                        <span>Loading......</span>
                </div>
                 
};



export default Loader;