import Link from "next/link";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import tech from "../assets/tech.png";
import { Fragment } from "react";

export default function SidebarHeader({ isOpen, onClose }) {
  const navItems = [
    "Contests",
    "User Management",
    "Marketing Campaigns",
    "Leaderboard Control",
    "Analytics",
    "Notifications",
    "Security",
    "Feedback & Support",
  ];

  return (
    <>
      <aside
        className={`
        fixed lg:static top-0 left-0 z-50
        w-72 h-screen bg-[#010B28] border-r border-[#010B28] 
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        shadow-2xl lg:shadow-none
      `}
      >
        <div className="p-6 flex-1 flex flex-col relative h-full overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 lg:hidden text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <Link href="/dashboard">
            <div className="w-fit mt-5 flex-shrink-0">
              <h2 className="text-4xl font-extrabold text-white rotate-[-8deg] origin-left leading-none">
                Fantasy
              </h2>
              <h1 className="text-5xl font-extrabold text-white rotate-[3deg] origin-left leading-none -mt-4 ml-16">
                Buzz
              </h1>
              <div className="flex items-center gap-3 mt-1 ml-15">
                <div className="relative w-30 h-10">
                  <Image
                    src={tech}
                    alt="Tech Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link href="/dashboard/create">
            <button className="w-full mt-24 cursor-pointer bg-[#12BAB0] hover:bg-opacity-90 transition-colors text-white px-4 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 mb-8 flex-shrink-0">
              <Plus className="w-4 h-4" />
              Create New Contest
            </button>
          </Link>

          <div className="border border-gray-700 rounded-full mt-10 flex-shrink-0"></div>

          <nav className="flex-1 overflow-y-auto mt-10">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <Fragment key={item}>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-[#9AA1B0] hover:text-[#12BAB0]  rounded-lg transition-all duration-200 text-sm font-medium"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                  {item === "Analytics" && index < navItems.length - 1 && (
                    <div className="border border-gray-700 rounded-full my-4"></div>
                  )}
                </Fragment>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      <style jsx>{`
        nav::-webkit-scrollbar {
          width: 3px;
        }

        nav::-webkit-scrollbar-thumb {
          background: #12bab0;
          border-radius: 10px;
        }

        .minimal-scrollbar {
          padding-right: 0;
        }

        .scrollbar-right {
          scrollbar-width: thin;
          scrollbar-color: #12bab0 transparent;
          padding-right: 0;
          margin-right: -20px;
        }
      `}</style>
    </>
  );
}
