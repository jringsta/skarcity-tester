import {Seo, Link} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Layout} from '~/components/index.server';

export default function Museum() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'Museum',
          }}
        />
      </Suspense>
      <MuseumBody />
    </Layout>
  );
}

function MuseumBody() {
  return (
    <div className="museum-container-outer">
      <div className="museum-container-inner">
        <div className="museum-container museum-container-1">
          <Link to="/museum/F22" className="museum-text">
            <div className="museum-bubble museum-bubble-1">F22</div>
          </Link>
          <div className="museum-line-1" />
        </div>

        <div className="museum-container museum-container-2">
          <div className="museum-bubble museum-bubble-2">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-2" />
        </div>

        <div className="museum-container museum-container-3">
          <div className="museum-bubble museum-bubble-3">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-3" />
        </div>

        <div className="museum-container museum-container-4">
          <div className="museum-bubble museum-bubble-4">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-4" />
        </div>

        <div className="museum-container museum-container-5">
          <div className="museum-bubble museum-bubble-5">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-5" />
        </div>

        <div className="museum-container museum-container-6">
          <div className="museum-bubble museum-bubble-6">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-6" />
        </div>

        <div className="museum-container museum-container-7">
          <div className="museum-bubble museum-bubble-7">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-7" />
        </div>

        <div className="museum-container museum-container-8">
          <div className="museum-bubble museum-bubble-8">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-8" />
        </div>

        <div className="museum-container museum-container-9">
          <div className="museum-bubble museum-bubble-9">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-9" />
        </div>

        <div className="museum-container museum-container-10">
          <div className="museum-bubble museum-bubble-10">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-10" />
        </div>

        <div className="museum-container museum-container-11">
          <div className="museum-bubble museum-bubble-11">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-11" />
        </div>

        <div className="museum-container museum-container-12">
          <div className="museum-bubble museum-bubble-12">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-12" />
        </div>

        <div className="museum-container museum-container-13">
          <div className="museum-bubble museum-bubble-13">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-13" />
        </div>

        <div className="museum-container museum-container-14">
          <div className="museum-bubble museum-bubble-14">
            <svg
              width="371"
              height="540"
              viewBox="0 0 371 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M140.7 390.931V373.45C140.7 351.664 144.123 333.41 150.97 318.69C157.817 303.97 166.31 291.673 176.45 281.8C186.729 271.815 197.791 262.67 209.53 254.45C221.437 246.09 232.467 237.596 242.62 228.97C252.856 220.231 261.369 209.657 267.72 197.79C274.3 185.617 277.593 170.66 277.6 152.92C277.6 137.207 274.053 123.644 266.96 112.23C259.867 100.817 249.867 91.8171 236.96 85.2305C224.04 78.6371 208.957 75.3398 191.71 75.3398C163.31 75.3398 139.607 85.3398 120.6 105.34C101.593 125.34 92.34 152.087 92.84 185.58H0C0 148.06 8.11336 115.484 24.34 87.8506C40.5667 60.2173 63.13 38.6669 92.03 23.2002C120.93 7.7402 154.14 0.00666667 191.66 0C228.667 0 260.483 6.33333 287.11 19C313.737 31.6667 334.273 49.4136 348.72 72.2402C363.173 95.0536 370.397 121.674 370.39 152.101C370.39 176.434 366.97 196.714 360.13 212.94C353.29 229.167 344.417 242.73 333.51 253.63C322.891 264.31 311.312 273.991 298.92 282.55C286.747 290.916 275.08 299.284 263.92 307.65C253.375 315.407 244.129 324.791 236.53 335.45C229.43 345.604 225.63 358.27 225.13 373.45L224.37 390.94L140.7 390.931ZM127.01 540V433.53H235.77V540H127.01Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="museum-line-14" />
        </div>

        <div className="museum-container museum-container-15">
          <div className="museum-bubble museum-bubble-15">
            <svg
              width="111"
              height="540"
              viewBox="0 0 111 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="museum-icon"
            >
              <path
                d="M0 540V431.7H110.59V540H0ZM21.66 385.27L2.32001 92.0596V0H109.82V92.0596L90.48 385.27H21.66Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
