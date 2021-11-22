import Icon from "../components/icon";

const Footer = ({ footerIcons }) => {
  return (
    <div className="bg-gray-800 shadow-md md:block hidden">
      {!!footerIcons.length && (
        <div className="h-12 flex text-sm font-light responsive-container items-center gap-2 px-4 sm:static bottom-0">
          <a
            className="hover:text-primary-400 text-primary-200 fill-current flex mr-4"
            target="_blank"
            href="https://www.linkedin.com/in/michael-murray-80b876136/"
          >
            <svg
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={"19px"}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z " />
            </svg>
            <h6 className="text-sm ml-4">My LinkedIn profile</h6>
          </a>
          <a
            className="hover:text-primary-400 text-primary-200 fill-current flex mr-4"
            target="_blank"
            href="https://github.com/MMMikeM/"
          >
            <svg
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={"19px"}
            >
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
            </svg>
            <h6 className="text-sm ml-4">My Github page</h6>
          </a>
        </div>
      )}
    </div>
  );
};

export default Footer;
