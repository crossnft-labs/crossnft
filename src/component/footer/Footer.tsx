import React from 'react'
import './footer.css'
import '../header/header.css'
const Footer = () => {
  return (
    <div className='footer_container'>
            <div className="footer__wrapper">
                <div className="footer_content">
                <h2 className='header_text'><a href="#home">CrossNFTL Lab</a></h2>
                <p className="footer_text">CrossNFT Lab is a defi platform that redefines NFT minting by introducing cross-chain capabilities</p>
                <div className="footer_social">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
                    <path d="M7.31339 18.395V10.1844H10.2081L10.6415 6.98452H7.31331V4.94155C7.31331 4.01512 7.58348 3.38381 8.97893 3.38381L10.7586 3.38301V0.521091C10.4508 0.482165 9.39429 0.39502 8.16531 0.39502C5.59929 0.39502 3.84255 1.88619 3.84255 4.62474V6.98452H0.94043V10.1844H3.84255V18.3949H7.31339V18.395Z" fill="#E2E8FF"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                    <path d="M12.8767 0.0965034V0.0932617H13.7207L14.029 0.154854C14.2346 0.19484 14.4213 0.247242 14.589 0.312075C14.7567 0.376909 14.9191 0.452554 15.0759 0.538993C15.2328 0.625432 15.3751 0.713509 15.5028 0.80319C15.6294 0.891801 15.743 0.98581 15.8437 1.08522C15.9432 1.18571 16.0985 1.21164 16.3095 1.16302C16.5205 1.11439 16.7477 1.04685 16.9912 0.960412C17.2346 0.873972 17.4754 0.776722 17.7135 0.66866C17.9515 0.560599 18.0965 0.491989 18.1485 0.462813C18.1993 0.432569 18.2264 0.41636 18.2296 0.414188L18.2328 0.409326L18.2491 0.401221L18.2653 0.393117L18.2815 0.385013L18.2978 0.376909L18.301 0.372046L18.3059 0.368805L18.3108 0.365563L18.314 0.3607L18.3302 0.355838L18.3465 0.352596L18.3432 0.376909L18.3383 0.401221L18.3302 0.425534L18.3221 0.449847L18.314 0.466055L18.3059 0.482264L18.2978 0.506576C18.2924 0.522785 18.287 0.54439 18.2815 0.57141C18.2761 0.598429 18.2247 0.706474 18.1273 0.895578C18.03 1.08468 17.9082 1.27648 17.7621 1.47098C17.6161 1.66548 17.4851 1.81242 17.3694 1.91185C17.2525 2.01234 17.1751 2.08257 17.1373 2.12255C17.0994 2.16361 17.0534 2.20142 16.9993 2.23601L16.9181 2.2895L16.9019 2.29761L16.8857 2.30571L16.8824 2.31057L16.8776 2.31381L16.8727 2.31706L16.8694 2.32192L16.8532 2.33002L16.837 2.33813L16.8338 2.34299L16.8289 2.34623L16.824 2.34947L16.8208 2.35433L16.8175 2.3592L16.8126 2.36244L16.8078 2.36568L16.8045 2.37054H16.8857L17.3401 2.27329C17.6431 2.20846 17.9326 2.13012 18.2085 2.03827L18.6467 1.8924L18.6954 1.87619L18.7198 1.86808L18.736 1.85998L18.7522 1.85187L18.7685 1.84377L18.7847 1.83567L18.8171 1.8308L18.8496 1.82756V1.85998L18.8415 1.86322L18.8334 1.86808L18.8301 1.87294L18.8253 1.87619L18.8204 1.87943L18.8171 1.88429L18.8139 1.88915L18.809 1.8924L18.8042 1.89564L18.8009 1.9005L18.7977 1.90536L18.7928 1.9086L18.7847 1.92481L18.7766 1.94102L18.7717 1.94426C18.7695 1.9475 18.7008 2.03934 18.5656 2.2198C18.4303 2.40134 18.3573 2.49318 18.3465 2.49535C18.3356 2.49859 18.3205 2.5148 18.301 2.54397C18.2826 2.57422 18.1679 2.69471 17.9569 2.90542C17.7459 3.11613 17.5393 3.3036 17.3369 3.46785C17.1335 3.63318 17.0307 3.83632 17.0285 4.07729C17.0253 4.31717 17.0128 4.5884 16.9912 4.89095C16.9695 5.19351 16.929 5.52037 16.8694 5.87156C16.8099 6.22275 16.718 6.61985 16.5935 7.06288C16.4691 7.5059 16.3176 7.93813 16.1391 8.35955C15.9605 8.78097 15.7739 9.15916 15.5791 9.49414C15.3843 9.82912 15.2058 10.1128 15.0435 10.3451C14.8812 10.5774 14.7162 10.7962 14.5484 11.0015C14.3807 11.2068 14.1687 11.4381 13.9122 11.6952C13.6547 11.9513 13.514 12.0918 13.4902 12.1167C13.4653 12.1404 13.3593 12.229 13.1721 12.3825C12.986 12.537 12.7858 12.6915 12.5715 12.846C12.3584 12.9995 12.1625 13.1275 11.984 13.2302C11.8054 13.3328 11.5901 13.4501 11.338 13.5819C11.087 13.7148 10.8153 13.838 10.5232 13.9515C10.231 14.0649 9.92265 14.1703 9.59803 14.2675C9.27341 14.3648 8.95962 14.4404 8.65664 14.4944C8.35368 14.5485 8.01012 14.5944 7.62598 14.6322L7.04979 14.6889V14.697H5.99479V14.6889L5.85682 14.6808C5.76486 14.6754 5.68911 14.67 5.62959 14.6646C5.57009 14.6592 5.34555 14.6295 4.95601 14.5755C4.56647 14.5215 4.2608 14.4674 4.03897 14.4134C3.81716 14.3594 3.48712 14.2567 3.04889 14.1054C2.61066 13.9542 2.23572 13.8012 1.92409 13.6467C1.61355 13.4933 1.41878 13.396 1.33978 13.355C1.26187 13.315 1.17423 13.2653 1.07684 13.2059L0.930764 13.1167L0.927534 13.1119L0.922648 13.1086L0.917779 13.1054L0.914533 13.1005L0.898302 13.0924L0.882071 13.0843L0.878841 13.0794L0.873956 13.0762L0.869086 13.073L0.86584 13.0681L0.86261 13.0632L0.857725 13.06H0.849609V13.0276L0.86584 13.0308L0.882071 13.0357L0.95511 13.0438C1.0038 13.0492 1.13636 13.0573 1.35277 13.0681C1.56919 13.0789 1.79911 13.0789 2.04258 13.0681C2.28604 13.0573 2.53492 13.033 2.78919 12.9952C3.04348 12.9573 3.34375 12.8925 3.69001 12.8007C4.03627 12.7088 4.3544 12.5997 4.6444 12.4732C4.9333 12.3457 5.13888 12.2507 5.26117 12.188C5.38235 12.1264 5.56738 12.0118 5.81625 11.8444L6.18956 11.5931L6.1928 11.5883L6.19767 11.585L6.20256 11.5818L6.20579 11.5769L6.20903 11.5721L6.2139 11.5688L6.21879 11.5656L6.22202 11.5607L6.23825 11.5558L6.25448 11.5526L6.25772 11.5364L6.26259 11.5202L6.26748 11.5169L6.27071 11.5121L6.14086 11.504C6.0543 11.4986 5.97044 11.4932 5.88928 11.4878C5.80813 11.4824 5.68099 11.4581 5.50786 11.4148C5.33474 11.3716 5.14809 11.3068 4.9479 11.2203C4.74772 11.1339 4.55295 11.0312 4.36359 10.9124C4.17424 10.7935 4.03735 10.6946 3.95295 10.6158C3.86963 10.5379 3.76142 10.4277 3.62833 10.2851C3.49632 10.1414 3.38162 9.99389 3.28424 9.84262C3.18685 9.69135 3.0938 9.51681 3.00508 9.31909L2.87035 9.02409L2.86223 8.99978L2.85412 8.97547L2.84925 8.95926L2.846 8.94305L2.87035 8.94629L2.8947 8.95116L3.07323 8.97547C3.19227 8.99168 3.37893 8.99708 3.6332 8.99168C3.88749 8.98628 4.06332 8.97547 4.1607 8.95926C4.25809 8.94305 4.3176 8.93224 4.33924 8.92684L4.3717 8.91874L4.41228 8.91064L4.45286 8.90253L4.4561 8.89767L4.46097 8.89443L4.46586 8.89119L4.46909 8.88632L4.43662 8.87822L4.40416 8.87012L4.3717 8.86201L4.33924 8.85391L4.30678 8.8458C4.28514 8.8404 4.24728 8.82959 4.19316 8.81339C4.13906 8.79718 3.99299 8.73774 3.75493 8.63509C3.51689 8.53244 3.32752 8.43249 3.18685 8.33524C3.04583 8.23771 2.91137 8.13104 2.78433 8.01593C2.65772 7.89923 2.51869 7.74903 2.36719 7.56534C2.21571 7.38165 2.08046 7.16823 1.96142 6.92511C1.8424 6.68198 1.75313 6.44966 1.69361 6.22814C1.63433 6.00793 1.59522 5.78278 1.57677 5.5555L1.54754 5.21512L1.56377 5.21836L1.58 5.22322L1.59623 5.23133L1.61246 5.23943L1.62869 5.24754L1.64492 5.25564L1.8965 5.3691C2.06423 5.44474 2.27252 5.50958 2.52139 5.5636C2.77027 5.61762 2.91904 5.64735 2.96773 5.65275L3.04077 5.66085H3.18685L3.18362 5.65599L3.17873 5.65275L3.17387 5.6495L3.17062 5.64464L3.16739 5.63978L3.1625 5.63654L3.15763 5.6333L3.15439 5.62843L3.13816 5.62033L3.12193 5.61222L3.1187 5.60736L3.11381 5.60412L3.10894 5.60088L3.1057 5.59602L3.08947 5.58791L3.07323 5.57981L3.07 5.57495C3.06676 5.57277 3.02022 5.5382 2.9304 5.47121C2.84167 5.40314 2.74862 5.31508 2.65123 5.20701C2.55385 5.09895 2.45646 4.98549 2.35908 4.86664C2.26151 4.74751 2.17461 4.62005 2.09938 4.48574C2.02365 4.35068 1.94357 4.17885 1.85917 3.97031C1.77585 3.76285 1.71255 3.55376 1.66927 3.34305C1.626 3.13234 1.60165 2.92434 1.59623 2.71902C1.59082 2.51371 1.59623 2.33813 1.61246 2.19225C1.62869 2.04637 1.66115 1.88158 1.70984 1.69789C1.75854 1.5142 1.82888 1.3197 1.92084 1.11439L2.05881 0.806432L2.06692 0.782119L2.07504 0.757806L2.07992 0.754565L2.08315 0.749702L2.0864 0.74484L2.09127 0.741598L2.09615 0.74484L2.09938 0.749702L2.10263 0.754565L2.1075 0.757806L2.11238 0.761048L2.11561 0.765911L2.11886 0.770773L2.12373 0.774015L2.13185 0.790223L2.13996 0.806432L2.14485 0.809673L2.14808 0.814536L2.36719 1.05766C2.51327 1.21975 2.6864 1.40075 2.88658 1.60064C3.08677 1.80054 3.19768 1.90428 3.21931 1.91185C3.24096 1.92048 3.268 1.94533 3.30047 1.9864C3.33293 2.02639 3.44114 2.12202 3.62508 2.27329C3.80904 2.42457 4.0498 2.60017 4.34736 2.80007C4.64493 2.99996 4.97495 3.19717 5.33744 3.39167C5.69994 3.58617 6.08948 3.76176 6.50606 3.91845C6.92265 4.07513 7.21481 4.17778 7.38252 4.22641C7.55025 4.27503 7.83699 4.33716 8.24276 4.4128C8.64853 4.48845 8.95422 4.53707 9.1598 4.55868C9.36539 4.58028 9.50607 4.59272 9.5818 4.59596L9.69542 4.5992L9.69219 4.57489L9.6873 4.55057L9.65484 4.34797C9.6332 4.2129 9.62238 4.0238 9.62238 3.78067C9.62238 3.53755 9.64132 3.31334 9.67919 3.10803C9.71707 2.90271 9.77388 2.69471 9.84961 2.484C9.92536 2.27329 9.99949 2.10417 10.072 1.97668C10.1456 1.85025 10.2419 1.706 10.3609 1.54391C10.4799 1.38183 10.6341 1.21435 10.8235 1.04145C11.0128 0.868559 11.2292 0.714579 11.4727 0.579514C11.7162 0.444449 11.9407 0.341785 12.1463 0.271554C12.3519 0.201323 12.525 0.155389 12.6657 0.133783C12.8063 0.112177 12.8767 0.0997451 12.8767 0.0965034Z" fill="#E2E8FF"/>
                </svg>
                </div>
                </div>
                <div className="content_wrapper">
                <div className="footer_content">
                <h2 className="content_header">Legal Documents</h2>
                <div className="inner_content">
                    <button className="content_btn"><a href="">Terms of Service</a></button>
                    <button className="content_btn"><a href="">Privacy Policy</a></button>
                    <button className="content_btn"><a href="">Terms and conditions</a></button>
                    <button className="content_btn"><a href="">TBD</a></button>
                    <button className="content_btn"><a href="">Affiliate Terms</a></button>
                </div>
                </div>
                <div className="footer_content">
                <h2 className="content_header">Company</h2>
                <div className="inner_content">
                <button className="content_btn"><a href="">About</a></button>
                    <button className="content_btn"><a href="">How it works</a></button>
                    <button className="content_btn"><a href="">Getting Started</a></button>
                    <button className="content_btn"><a href="">Help</a></button>
                    <button className="content_btn"><a href="">Chat Support</a></button>
                </div>
                </div>
                </div>
            </div>
            <div className="last_footer">
                <div className="underline"></div>
                <p className="last">Copyright © 2023 NFT lab</p>
            </div>    
        </div>
  )
}

export default Footer