import { Link } from 'react-router-dom';
import { BsArrowLeftSquare } from 'react-icons/bs';

function About() {
    return (
        <div className="flex flex-col container mx-auto">
            <div className="flex inline mt-40">
                <Link to="/">
                    <button className='mb-4 text-red-300 hover:text-red-400 text-3xl mr-4'>
                        <BsArrowLeftSquare />
                    </button>
                </Link>
                <h2 className="text-3xl">About</h2>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col bg-gray-500 rounded-xl w-fit p-10 text-xl text-center mx-10 my-10'>
                    <h4>Hi! I'm Liliana from Argentina.👋</h4>
                    <br />
                    <h4>You can reach me at:</h4>
                    <br />
                    <a rel="noreferrer" target="_blank" href="https://leiva-liliana.vercel.app/" className="bg-red-500 text-white border-2 rounded-xl mb-4">
                        Portfolio
                    </a>
                    <a rel="noreferrer" target="_blank" href="http://github.com/lilileiva" className="bg-neutral-900 text-white border-2 rounded-xl mb-4">
                        GitHub
                    </a>
                    <a rel="noreferrer" target="_blank" href="http://www.linkedin.com/in/lilianaleiva" className="bg-blue-700 text-white border-2 rounded-xl">
                        LinkedIn
                    </a>                    
                    <br />
                    <p>📭 lilianadelcleiva@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default About;