import React from 'react';

const Questions = () => {
    return (
        <div className='container'>
            <h2 className="text-center fw-bold my-5 faq">Frequently Asked Questions</h2>

            <div id="accordionExample">
                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            রিএক্ট কিভাবে কাজ করে?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-5 fw-light">
                            <strong>রিএক্ট এর গুণ হল এর সিম্প্লিসিটি। এটি মূল জাভাস্ক্রিপ্টের পাশাপাশি JSX নামে একটি বিশেষ সিনট্যাক্স ব্যবহার করে যা আমাদের জাভাস্ক্রিপ্টের ভিতরে 100% HTML লিখতে দেয়। এখন ব্রাউজার বিহ্যাইন্ড দ্যা সীনে একটা ডম ট্রি তৈরি করে যাতে ব্যবহারকারী সেই ডম ট্রি এর সাথে যোগাযোগ করতে পারে। তারপর আমাদের সামনে একটি ওয়েবপেজ উপস্থিত হয়। কিন্তু আমরা জানি যে জাভাস্ক্রিপ্ট DOM ম্যানিপুলেট করতে পারে। সুতরাং জাভাস্ক্রিপ্ট দিয়ে রেন্ডার কমপ্লিট হওয়া কোন পেজের ডম ম্যানিপুলেট করলে সেই ওয়েবপেজ আবার পুরোপুরি রেন্ডার হয়(দুই একটা লেটেস্ট ব্রাউজার ছাড়া বাকী বেশীরভাগ ব্রাউজারই পুরোপুরি নতুন করে আবার ডম ট্রি তৈরী করে রেন্ডার করে) যেটা সময় সাপেক্ষ। আর তাই একটা পেজে ডম ম্যানিপুলেট করার মতো ততো বেশী জাভাস্ক্রিপ্ট থাকলে সেই ওয়েবপেজ স্লো হয়ে যাবে। তাই এখানেই রিঅ্যাক্ট এর আসল খেলা।</strong>
                        </div>
                    </div>
                </div>


                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            স্টেট ও প্রপস এর মধ্যে পার্থক্য কি?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-5 fw-light">
                            <strong><b>স্টেট:</b> <br></br> <br></br>
                                i. স্টেট হচ্ছে মিউটেবল ।<br></br>

                                ii. স্টেট একটি উপাদানের অভ্যন্তরীণ পরিবেশ পরিচালনা করতে ব্যবহৃত হয় মানে উপাদানটির ভিতরে ডেটা পরিবর্তন হয় ।<br></br>

                                iii. স্টেট এর পারফরমেন্স বেশি ভালো না ।<br></br>

                                iv. উপরের স্তরের উপাদান।<br></br> <br />

                                <b>স্টেট:</b> <br></br> <br></br>
                                i. প্রপস হচ্ছে ইমিউটেবল ।<br></br>

                                ii. প্রপগুলি একটি উপাদান দ্বারা বাহ্যিক পরিবেশ থেকে ডেটা পেতে ব্যবহৃত হয় ।<br></br>

                                iii. প্রপসের পারফরমেন্স অনেক ভালো ।<br></br>

                                iv. উপরের স্তরের উপাদান।</strong><br></br>
                        </div>
                    </div>
                </div>

                <div className="accordion-item mb-1">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion border-0 fs-5 ms-3 fw-bold bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            ইউজস্টেট কিভাবে কাজ করে?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body fs-5 fw-light">
                            <strong>এটি হল একটি হুক (ফাংশন) যা আপনাকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল রাখতে দেয়। আপনি এই ফাংশনে প্রাথমিক অবস্থা পাস করেন এবং এটি বর্তমান অবস্থার মান (প্রাথমিক অবস্থা নয়) সহ একটি পরিবর্তনশীল প্রদান করে এবং এই মানটি আপডেট করার জন্য অন্য একটি ফাংশন প্রদান করে।</strong>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Questions;