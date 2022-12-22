import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { roulettes } from "../../config/global.const";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../../reducer";
import axios from "axios";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";
import FAQ from '../../component/fap/fap';
import Layout from "../../component/layout/layout";
import "./portfolio.scss";

const Portfolio = () => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};

	return (
		<Layout>
			<section className="request-section">
				<div className="container mx-auto flex flex-col py-32">
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-9">
							<h4 className="primary-color">FLASH AUDIT</h4>
							<h1 className="font-bold">
								<div className="">
									Audit Contract <br />
									Analysis
									{/* <span className="primary-color relative">
										<span className="smart">
										</span>
										smart
									</span> */}
								</div>
							</h1>
							<h5 className="grey-color">
								Flash Audit, audits custom smart contracts, DApps, NFTs and custom blockchains.
							</h5>
						</div>
						<div className="col-sm-12 col-md-6 mb-9">
							<img src="/assets/images/portfolio.png" alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className="feature-section pt-4 ">
				<div className="container mx-auto flex flex-col py-16 sm:py-32">
					<div className="row m-auto text-center">
						<span className="primary-color">
							Portfolio
						</span>
						<h1 className="">
							Audit Portfolio
						</h1>
					</div>
					<div className="mt-10">
						<div className="row text-left">
							<div className="col-sm-12 col-md-6">
								<img src="/assets/images/portfolio-flash.png" className="m-auto w-[250px] sm:w-auto" alt="" />
							</div>
							<div className="col-sm-12 col-md-6 flex items-center">
								<div className="m-auto">
									<h3>Visit our GitHub to see the full list of audited contracts.</h3>
									<br />
									<h5 className="grey-color">
										Flash Audit provides a professional, in-depth, quick and easy to understand smart contract security audit. We perform in-depth and penetrating static, manual, automated and intelligent analysis of the smart contract . We can
										audit custom smart contracts, DApps, NFTs and custom blockchains.
									</h5>
									<br />
									<h5 className="primary-color">
										Flash Token Smart Contract Audit
									</h5>
									<br />
									<div className="flex items-start sm:items-center  jc-s gap-6 flex-col sm:flex-row">
										<div className="flex items-center justify-start gap-4">
											<div className="round-frame-con">
												<div className="round-frame">
													<img style={{ width: '20px', height: '20px' }} src="/assets/images/portfolio/read.png" alt="" className="" />
												</div>
											</div>
											<span>Read the full audit</span>
										</div>
										<div className="flex items-center justify-start gap-4">
											<div className="round-frame-con">
												<div className="round-frame">
													<img style={{ width: '20px', height: '20px' }} src="/assets/images/portfolio/request.png" alt="" className="" />
												</div>
											</div>
											<span className="primary-color">Request an audit</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FAQ />
		</Layout>
	);
};
export default Portfolio; 
