import React from 'react';
import './ModalInsta.scss';

const ModalInsta = (props) => {

    return (
        <div className="modal_insta">
            <div className="bg" onClick={() => {
                props.setinstaModal(false)
            }}>

                <div className="content">
                    <p className="title"><span>Instagram Clone</span> Project</p>
                    <button className="close" onClick={() => {
                        props.setinstaModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    
                    <div className="contents">
                        <div className="img_container">
                            <div className="imgs"></div>
                            <div className="imgs second"></div>
                        </div>
                        <div className="script">
                            <div style={{'margin-bottom':'30px'}}>React 함수형 컴포넌트와 Sass를 활용하여 <strong>Instagram Clone</strong> 제작하였습니다. 비동기 API통신 요청 숙달에 중점을 둔 프로젝트 입니다.</div>
                            <div style={{'margin-bottom':'10px' }}>
                                <i class="fas fa-circle"></i>기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}>HTML5, CSS3, Javascript, React, Redux, React-router-dom, Sass, axios</div>

                            {/* <div>페이지별 기능</div>
                            <div>디테이페이지: 상품을 클릭하면 고유 상품 id에 매칭되는 상품의 상세 페이지가 보입니다. 주문하기를 누르면 cart페이지로 이동하며 상품 갯수가 추가됩니다</div>
                            <div>카트 페이지: 수량 증감 기능이 있으며 </div>
                            <div>로그인/회원가입 페이지: validaton을 통해 유효성검사 </div> */}
                            
                            <div style={{'margin-bottom':'10px'}}>
                                <i class="fas fa-circle"></i>구현사항
                            </div>
                            <div><i class="fas fa-check"></i> React-Router를 활용한 SPA 라우팅</div>
                            <div><i class="fas fa-check"></i> reducer를 활용한 상태관리</div>
                            <div><i class="fas fa-check"></i> React hook(useHistory, lestContext, useContext, useState)등을 활용한 </div>
                            <div><i class="fas fa-check"></i> axios를 통한 서버 API 요청/응답 처리</div>

                            <div class="bottom_container">
                                <i class="fab fa-github"></i>
                                <div>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ModalInsta;