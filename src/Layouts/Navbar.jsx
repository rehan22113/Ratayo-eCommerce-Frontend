import "flowbite";
import React, { Fragment } from "react";
import { Popover, Tab, Transition } from "@headlessui/react";
import {
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { trigger } from "../Service/Slice/Mobilemenu";
const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
    categories: [
        {
            name: "New Arrival",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
                    imageAlt:
                        "Models sitting back to back, wearing Basic Tee in black and bone.",
                },
                {
                    name: "Basic Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
                    imageAlt:
                        "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
                },
                {
                    name: "Accessories",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
                    imageAlt:
                        "Model wearing minimalist watch with black wristband and white watch face.",
                },
                {
                    name: "Carry",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
                    imageAlt:
                        "Model opening tan leather long wallet with credit card pockets and cash pouch.",
                },
            ],
        },
        {
            name: "Sales",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
                    imageAlt:
                        "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
                },
                {
                    name: "Basic Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
                    imageAlt: "Model wearing light heather gray t-shirt.",
                },
                {
                    name: "Accessories",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
                    imageAlt:
                        "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
                },
                {
                    name: "Carry",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
                    imageAlt:
                        "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
                },
            ],
        },
    ],
    pages: [
        { name: "Store", href: "/shop" },
        { name: "Why Us", href: "#" },
    ],
    megaMenu: [
        {
            name: "Home Appliances",
            subMenu: [
                {
                    name: "Household Appliances",
                },
                {
                    name: "Personal Care Appliances",
                },
                {
                    name: "Commercial Appliances",
                },
                {
                    name: "Major Appliances",
                },
                {
                    name: "Home Appliance Parts",
                },
                {
                    name: "Kitchen Appliances",
                },
            ],
        },
        {
            name: "Food",
            subMenu: [
                {
                    name: "Grain Products",
                },
                {
                    name: "Coffee",
                },
                {
                    name: "Nut & Kernel",
                },
                {
                    name: "Ready meal",
                },
                {
                    name: "Bread and pastries",
                },
                {
                    name: "Tea Cakes & Pasteries",
                },
                {
                    name: "Candies and Chocolates",
                },
                {
                    name: "Cooking herbs",
                },
            ],
        },
        {
            name: "Computer & Office",
            subMenu: [
                {
                    name: "Storage Devices",
                },
                {
                    name: "Tablet Accessories",
                },
                {
                    name: "Networking",
                },
                {
                    name: "Mouse & Keyboards",
                },
                {
                    name: "Laptop Accessories",
                },
                {
                    name: "Laptop Parts",
                },
                {
                    name: "Tablet Parts",
                },
            ],
        },
        {
            name: "Home Improvement",
            subMenu: [
                {
                    name: "Electrical Equipments & Supplies",
                },
                {
                    name: "Hardware",
                },
                {
                    name: "Kitchen Fixtures",
                },
                {
                    name: "Plumbing",
                },
                {
                    name: "Home Appliances",
                },
                {
                    name: "Bathroom Fixtures",
                },
            ],
        },
        {
            name: "Home & Garden",
            subMenu: [
                {
                    name: "Garden Supplies",
                },
                {
                    name: "Household Merchandises",
                },
                {
                    name: "Arts",
                },
                {
                    name: "Festive & Party Supplies",
                },
                {
                    name: "Bathroom Products",
                },
                {
                    name: "Pet Products",
                },
            ],
        },
        {
            name: "Sports & Entertainment",
            subMenu: [
                {
                    name: "Sports Accessories",
                },
                {
                    name: "Swimming",
                },
                {
                    name: "Cycling",
                },
                {
                    name: "Skiing & Snowboarding",
                },
                {
                    name: "Water Sports",
                },
                {
                    name: "Shooting",
                },
                {
                    name: "Camping & Hiking",
                },
                {
                    name: "Musical Instruments",
                },
            ],
        },
        {
            name: "Education & Office Supplies",
            subMenu: [
                {
                    name: "Paper",
                },
                {
                    name: "Desk Accessories & Organizer",
                },
                {
                    name: "Presentation Supplies",
                },
                {
                    name: "Books & Magazines",
                },
                {
                    name: "Mail & Shipping Supplies",
                },
                {
                    name: "Writing & Correction Supplies",
                },
                {
                    name: "Office Binding Supplies",
                },
                {
                    name: "Cutting Supplies",
                },
            ],
        },
        {
            name: "Toys & Hobbies",
            subMenu: [
                {
                    name: "Stress Relief Toy",
                },
                {
                    name: "Pools & Water Fun",
                },
                {
                    name: "Popular Toys",
                },
                {
                    name: "Ride On Toys",
                },
                {
                    name: "Remote Control Toys",
                },
                {
                    name: "Diecasts & Toy Vehicles",
                },
                {
                    name: "Learning & Education",
                },
            ],
        },
        {
            name: "Security & Protection",
            subMenu: [
                {
                    name: "Security Alarm",
                },
                {
                    name: "Building Automation",
                },
                {
                    name: "Video Surveillance",
                },
                {
                    name: "IoT Devices",
                },
                {
                    name: "Security Inspection Device",
                },
                {
                    name: "Lightning Protection",
                },
                {
                    name: "Emergency Kits",
                },
            ],
        },
        {
            name: "Automobiles & Motorcycles",
            subMenu: [
                {
                    name: "Car Lights",
                },
                {
                    name: "Car Repair Tools",
                },
                {
                    name: "ATV",
                },
                {
                    name: "Travel & Roadway Product",
                },
                {
                    name: "Car Wash & Maintenance",
                },
                {
                    name: "Car Electronics",
                },
                {
                    name: "Auto Replacement Parts",
                },
                {
                    name: "Exterior Accessories",
                },
                {
                    name: "Interior Accessories",
                },
            ],
        },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = ({ color }) => {
    const dispatch = useDispatch();

    return (
<>
{/* Navigation */}
<header className="relative z-40">
<nav aria-label="Top">
{/* Top navigation */}
<div className="bg-skin-primary">
<div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
{/* Currency selector */}
<form>
<div>
<label
    htmlFor="desktop-currency"
    className="sr-only"
>
    Currency
</label>
<div className="-ml-2 group relative bg-skin-primary border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
    <select
        id="desktop-currency"
        name="currency"
        className="bg-none bg-skin-primary border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
    >
        {currencies.map((currency) => (
            <option key={currency}>
                {currency}
            </option>
        ))}
    </select>
    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-gray-300"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 8l4 4 4-4"
            />
        </svg>
    </div>
</div>
</div>
</form>

<div className="flex items-center space-x-6 justify-center">
<Link
to="/login"
className="text-sm font-medium text-white hover:text-gray-100"
>
Sign in
</Link>
<Link
to="/register"
className="text-sm font-medium text-white hover:text-gray-100"
>
Be a vendor
</Link>
</div>
</div>
</div>

{/* Secondary navigation */}
<div>
<div className="backdrop-blur-md backdrop-filter bg-opacity-40 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div>
<div className="h-32 lg:space-x-4 flex items-center justify-between">
    <div className="flex flex-row">
        {/* Logo (lg+) */}
        <div className="hidden lg:flex-1 lg:flex lg:items-center">
            <Link to="/">
                <span className="sr-only">
                    Ratayo
                </span>
                <img className="h-12 w-auto" src={Logo} alt="Ratayo_logo" />
            </Link>
        </div>
        {/* <span className="p-1"></span> */}

    </div>
    {/* search Bar */}
    <div className="lg:flex hidden w-full">
  <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
  <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
  <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(897px, 5637px, 0px)'}}>
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
      <li>
        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
      </li>
      <li>
        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
      </li>
      <li>
        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
      </li>
      <li>
        <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
      </li>
    </ul>
  </div>
  <div className="relative w-full">
    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-600 rounded-r-lg border border-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-600 dark:focus:ring-blue-800">
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <span className="sr-only">Search</span>
    </button>
  </div>
</div>

    <div>
        
    </div>
    {/* Mobile menu and search (lg-) */}
    <div className="flex-1 flex items-center lg:hidden">
        <button
            type="button"
            className="-ml-2 p-2 text-white"
            onClick={() =>
                dispatch(trigger(true))
            }
        >
            <span className="sr-only">
                Open menu
            </span>
            <MenuIcon
                className="h-6 w-6"
                aria-hidden="true"
            />
        </button>

        {/* Search */}
        <Link
            to="#"
            className="ml-2 p-2 text-white"
        >
            <span className="sr-only">
                Search
            </span>
            <SearchIcon
                className="w-6 h-6"
                aria-hidden="true"
            />
        </Link>
    </div>

    {/* Logo (lg-) */}
    <div className="flex justify-center w-full lg:hidden">

    <Link to="/" className="lg:hidden">
        <span className="sr-only">
            Ratayo
        </span>
        <img
            src={Logo}
            alt="Mobile_logo"
            className="h-8 w-auto"
        />
    </Link>
    </div>
    <div className="flex items-center justify-end">

        <div className="flex items-center lg:ml-8">
                                                {/* Help */}
        <Link to="#" className="p-2 text-white lg:hidden" >
            <span className="sr-only">Help</span>
            <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true"/>
             </Link>
            <Link to="#" className="hidden text-sm font-medium text-white lg:block" >
                Help
            </Link>

                                                {/* Cart */}
            <div className="ml-4 flow-root lg:ml-8">
                <Link
                    to="#"
                    className="group -m-2 p-2 flex items-center"
                >
                    <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-white">
                        1
                    </span>
                    <span className="sr-only"> items in cart, view bag
                    </span>
                </Link>
            </div>
        </div>
    </div>
    
            </div>
            {/* bottom menu */}
                    <div className="hidden h-full lg:flex">
            {/* Flyout menus */}
<Popover.Group className="px-2 bottom-0 inset-x-0">
<div className="h-full flex justify-center space-x-16">
<Popover className="flex">
{({ open }) => (
<>
<div className="relative flex">
<Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium drop-shadow-lg bg-opacity-50 bg-gray-800 rounded px-10 p-2 text-white">
    All Categories
<span className={classNames(open? "bg-white": "","absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200")} aria-hidden="true"
/>
</Popover.Button>
</div>

<Transition as={Fragment}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
>
<Popover.Panel className="absolute z-[90] top-full 2xl:left-[12%] left-[3%] w-[15.8rem] text-sm text-gray-500">
<div
    id="mega-menu-full-image-dropdown"
    className="mt-1 bg-black shadow-lg absolute flex items-center justify-center"
>
    <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:px-6">
        <ul
            className="mb-8 pb-6 space-y-4 md:mb-0 md:block"
            aria-labelledby="mega-menu-full-image-button"
        >
{/* ============= sub menu start ============== */}
{navigation.megaMenu.map(
(
menu,
index
) => {
return (
<Fragment
key={
index
}
>
<li>
<div className="hover:underline hover:text-white font-bold text-gray">
{/* Flyout menus */}
<Popover.Group className="bottom-0 inset-x-0">
<div className="h-full flex">
<Popover className="flex">
    {({
        open,
    }) => (
        <>
            <div className="relative">
                <Popover.Button>
                    {
                        menu.name
                    }
                    <span
                        className={classNames(
                            open
                                ? "bg-white"
                                : "",
                            "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                        )}
                        aria-hidden="true"
                    />
                </Popover.Button>
            </div>

            {menu.hasOwnProperty(
                "subMenu"
            ) ? (
                <>
<Transition
    as={Fragment}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
>
    <Popover.Panel className="absolute z-[90] 2xl:left-full left-full w-[450%] h-4 flex-wrap text-sm text-gray-500">
        <div
            id="mega-menu-full-image-dropdown"
            className="mt-1 bg-black shadow-lg absolute flex items-center justify-center"
        >
            <div className="flex py-5 px-4 mx-auto max-w-screen-xl w-[100%] text-sm text-gray-500 dark:text-gray-400 md:px-6">
                <ul
                    className="mb-8 pb-6 space-y-4 md:mb-0 md:block"
                    aria-labelledby="mega-menu-full-image-button"
                >
                    {menu.subMenu.map((subMenu,indexs) => {
                            return (
                                <Fragment key={indexs} >
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover:underline hover:text-white font-bold text-gray"
                                        >
                                            {
                                                subMenu.name
                                            }
                                        </Link>
                                    </li>
                                </Fragment>
                            );
                        }
                    )}

                    <li>
                        <Link to="#" className="hover:underline text-skin-secondary hover:text-white" >
                            Explore More ⚡
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex py-5 px-4 mx-auto max-w-screen-xl w-[100%] text-sm text-gray-500 dark:text-gray-400 md:px-6">
                <ul
                    className="mb-8 pb-6 space-y-4 md:mb-0 md:block"
                    aria-labelledby="mega-menu-full-image-button"
                >
                    {menu.subMenu.map(
                        (
                            subMenu,
                            indexs
                        ) => {
                            return (
                                <Fragment
                                    key={
                                        indexs
                                    }
                                >
                                    <li>
                                        <Link to="#" className="hover:underline hover:text-white font-bold text-gray"
                                        >
                                            {
                                                subMenu.name
                                            }
                                        </Link>
                                    </li>
                                </Fragment>
                            );
                        }
                    )}

                    <li>
            <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                Explore More ⚡
            </Link>
                    </li>
                </ul>
            </div>
            <div className="flex py-5 px-4 mx-auto max-w-screen-xl w-[100%] text-sm text-gray-500 dark:text-gray-400 md:px-6">
                <ul
                    className="mb-8 pb-6 space-y-4 md:mb-0 md:block"
                    aria-labelledby="mega-menu-full-image-button"
                >
                    {menu.subMenu.map((subMenu,indexs) => {
                            return (
                                <Fragment key={indexs}>
                                    <li>
                <Link to="#" className="hover:underline hover:text-white font-bold text-gray">
                        {subMenu.name}
                </Link>
                                    </li>
                                </Fragment>
                            );
                        }
                    )}

                    <li>
            <Link to="#" className="hover:underline text-skin-secondary hover:text-white">
                    Explore More ⚡
            </Link>
                    </li>
                </ul>
            </div>
            <div className="grid py-5 px-4 mx-auto text-sm text-gray-500 dark:text-gray-400 md:px-6">
            <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" />
            </div>
        </div>
    </Popover.Panel>
</Transition>
                </>
            ) : (
                ""
            )}
        </>
    )}
</Popover>
</div>
</Popover.Group>
</div>
</li>
</Fragment>
);
}
)}

            <li>
                <Link
                    to="#"
                    className="hover:underline text-skin-secondary hover:text-white"
                >
                    Explore
                    More
                    ⚡
                </Link>
            </li>
        </ul>
    </div>
</div>

{/* Mega Menu end  */}
</Popover.Panel>
</Transition>
</>
)}
</Popover>

{/* end of categories */}
{navigation.categories.map((category) => (
    <Popover key={category.name} className="flex" >
        {({open}) => (
    <>
<div className="relative flex">
    <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white">
        {
            category.name
        }
        <span
            className={classNames(
                open
                    ? "bg-white"
                    : "",
                "absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
            )}
            aria-hidden="true"
        />
    </Popover.Button>
</div>

<Transition
    as={
        Fragment
    }
    enter="transition ease-out duration-200"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
>
    <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
        <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
        />

        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                    {category.featured.map((item) => (
                <div key={item.name} className="group relative">
                    <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
        <img src={ item.imageSrc} alt={item.imageAlt} className="object-center object-cover"/>
            </div>
        <Link to={ item.href} className="mt-4 block font-medium text-skin-primary">
            <span className="absolute z-10 inset-0" aria-hidden="true" />
                {item.name}
        </Link>
            <p aria-hidden="true" className="mt-1">Shop now</p>
        </div>
        ))}
                </div>
            </div>
        </div>
    </Popover.Panel>
</Transition>
</>
)}
    </Popover>
    )
    )}

    {navigation.pages.map((page) => (
        <Link key={page.name} to={page.href} className="flex items-center text-sm font-medium text-white">
        {page.name}
        </Link>
    ))}
    </div>
    </Popover.Group>
        </div>



          </div>
        </div>
       </div>
     </div>
    </nav>
</header>
</>
    );
};

export default Navbar;
