import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap p-20">
    <div className="pl-20">
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center ml-32">{props.children}</ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
