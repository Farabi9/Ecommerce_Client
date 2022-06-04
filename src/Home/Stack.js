import React from 'react';

const Stack = () => {
    return (
        <div className="stats shadow w-full">

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <i class="fa-brands text-5xl my-4 mt-3 fa-product-hunt"></i>
                <div className="stat-title uppercase font-bold">Products</div>
                <div className="stat-value">31K+</div>
                <div className="stat-desc">2021-2022</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <i class="fa-solid text-5xl my-4 mt-3 fa-users"></i>
                <div className="stat-title uppercase font-bold">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">

                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <i class="fa-solid text-5xl my-4 mt-3 fa-people-group"></i>
                <div className="stat-title uppercase font-bold">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <i className="fa-solid text-5xl my-4 mt-3 fa-face-smile"></i>
                <div className="stat-title uppercase font-bold">Review </div>
                <div className="rating rating-lg mx-auto">
                    <input type="radio" name="rating-9" className="rating-hidden" checked disabled />
                    <input type="radio" name="rating-9" className="mask mask-star-2" checked disabled />
                    <input type="radio" name="rating-9" className="mask mask-star-2" checked disabled />
                    <input type="radio" name="rating-9" className="mask mask-star-2" checked disabled />
                    <input type="radio" name="rating-9" className="mask mask-star-2" checked disabled />
                    <input type="radio" name="rating-9" className="mask mask-star-2" disabled />
                </div>
            </div>

        </div>
    );
};

export default Stack;