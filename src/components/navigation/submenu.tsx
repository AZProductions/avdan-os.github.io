import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Tabs, useTheme } from '@geist-ui/core';
import { Alert } from '@/components/alert';

const Submenu = () => {
  const theme = useTheme();
  const router = useRouter();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setSticky(document.documentElement.scrollTop > 54);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [setSticky]);

  return (
    <>
      {theme.type === 'dark' ? (
        <nav className="submenu__wrapper">
          <div className={`submenu ${sticky ? 'submenu_sticky' : ''}`}>
            <div className="submenu__inner">
              <h4 className="submenu__highlight">AvdanOS</h4>
              <Tabs value={router.asPath} onChange={(route) => router.push(route)}>
                <Tabs.Item label="Overview" value="/#overview" />
                <Tabs.Item label="Switching to AvdanOS" value="/test" />
                <Tabs.Item label="Privacy and Security" value="/test" />
                <Tabs.Item label="Gaming" value="/test" />
              </Tabs>
              {/* <Alert /> */}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="submenu__wrapper">
          <div className={`submenu ${sticky ? 'submenu_sticky' : ''}`}>
            <div className="submenu__inner">
              <h4 className="submenu__highlight">AvdanOS</h4>
              <Tabs value={router.asPath} onChange={(route) => router.push(route)}>
                <Tabs.Item label="Overview" value="/#overview" />
                <Tabs.Item label="Switching to AvdanOS" value="/test" />
                <Tabs.Item label="Privacy and Security" value="/test" />
                <Tabs.Item label="Gaming" value="/test" />
              </Tabs>
              {/* <Alert /> */}
            </div>
          </div>
        </nav>
      )}
      <style jsx>{`
        .submenu__wrapper {
          border-top: 1px solid ${theme.palette.border};
          height: 48px;
          position: relative;
          overflow: hidden;
          background: ${theme.palette.accents_1};
          box-shadow: inset 0 -1px ${theme.palette.border};
        }
        .submenu_sticky {
          transition: box-shadow 0s ease;
        }
        .submenu_sticky {
          position: fixed;
          border-top: 1px solid ${theme.palette.border};
          border-bottom: 1px solid ${theme.palette.border};
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          background: ${theme.palette.accents_1};
          box-shadow: ${
            theme.type === 'dark' ? `inset 0 -1px ${theme.palette.border}` : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'
          };
        }
        .submenu__inner {
          display: flex;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          height: 48px;
          box-sizing: border-box;
          overflow-y: hidden;
          overflow-x: auto;
          overflow: -moz-scrollbars-none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          box-sizing: border-box;
        }
        .submenu__inner::-webkit-scrollbar {
          // display: none;
        }
        .submenu__inner :global(.content) {
          // display: none;
        }
        .submenu__inner :global(.tabs),
        .submenu__inner :global(header) {
          height: 100%;
          border: none;
        }
        .submenu__inner :global(.tab) {
          height: calc(100% - 2px);
          padding-top: 0;
          padding-bottom: 0;
          // color: ${theme.palette.accents_5};
          font-size: 0.875rem;
        }
        .submenu__inner :global(.tab):hover {
          color: ${theme.palette.foreground};
        }
        .submenu__inner :global(.active) {
          color: ${theme.palette.foreground};
        }
        .submenu__highlight {
            font-weight: 700;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            text-decoration: none;
            white-space: nowrap;
            margin-top: 7px;
          }
        }
      `}</style>
    </>
  );
};

export default Submenu;
