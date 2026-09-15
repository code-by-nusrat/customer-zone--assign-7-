import { IoIosAdd } from "react-icons/io";



const Navbar = () => {
    return (
        <div className=" max-w-[1600px] sticky top-0 z-50 bg-white h-19.5 mt-5 navbar">
            <div className="nav-container flex w-360  items-center justify-between inter mx-auto ">
                <div>
                    <h2 className="font-bold text-[1.3rem] ">CS — Ticket System</h2>
                </div>
                <div className=" flex items-center gap-8 text-[1rem]">
                   
                        <p className="nav-list">Home</p>
                        <p className="nav-list">FAQ</p>
                        <p className="nav-list">Changelog</p>
                        <p className="nav-list">Blog</p>
                        <p className="nav-list">Download</p>
                        <p className="nav-list">Contact</p>
                    
                        <button className="btn bg-linear-to-r from-[#632EE3] to-purple-500 text-white"> <IoIosAdd />
                        New Ticket</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;