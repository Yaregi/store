import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Store.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import $, { extend } from 'jquery';



const Store = () => {


    const slick1 = {
        dots: true,
        isFinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        fade: true,
        autoplay: true,
        infinite: true
    }

    $(function () {

        let winHeight = $(window).height();

        $('.bar').height(winHeight);

        $('.bar .allgames h1').on('click', function () {
            $(this).next().stop().slideToggle();
            $(this).parent().toggleClass('open');
        })

        $(window).on('resize', function () {
            document.location.reload();
        });

        $(window).on('redsize', function () {
            let winHeight = $(window).height();
        });




    });
    return (
        <div>
            <div id='main'>
                <div id='left_main'>
                    <div id='left'>
                        <div className='tit'>
                            <a href="#"><img src="./img/logo3.png"></img></a>
                        </div>
                        <div className='search'>
                            <input type='text' id='sc' placeholder='검색 내용을 입력하세요'></input>
                        </div>
                    </div>
                </div>
                <div id='mainVisual'>
                    <div className='lbg'>
                        <ul>
                            <Slider {...slick1}>
                                <li className='main2'><a href="#"><img src='./img/shopm1.png'></img>
                                    <div className='txt'>
                                        <div className='logo'>
                                            <img src='./img/shoplogo1.png'></img>
                                        </div>
                                        <p>끝없이 펼쳐진 백색...<br></br>
                                            하늘에 우뚝 선「세계수」를 중심으로<br></br>
                                            펼쳐진 구름바다. 이 세계가 만들어진...
                                        </p>
                                        <a href="#">구매하기</a>
                                    </div>
                                    <span></span>
                                </a></li>
                                <li className='main1'><a href="#"><img src='./img/shopm2.jpg'></img>
                                    <div className='txt'>
                                        <div className='logo'>
                                            <img src='./img/shoplogo2.png'></img>
                                        </div>
                                        <p>50년 재앙에 맞서는 불의 마을의 이야기<br></br>
                                            새로운 수렵 생활은 제철 기술이 발달한<br></br>
                                            '카무라 마을'을 거점으로 전개된다.
                                        </p>
                                        <a href="#">구매하기</a>
                                    </div>
                                    <span></span>
                                </a></li>
                            </Slider>

                        </ul>
                    </div>
                    <div className='rbg'>
                        <ul className='clear'>
                            <li><a href="#"><img src='./img/sub1.jpg'></img></a></li>
                            <li><a href="#"><img src='./img/sub2.jpg'></img></a></li>
                            <li><a href="#"><img src='./img/sub3.jpg'></img></a></li>
                            <li><a href="#"><img src='./img/sub4.jpg'></img></a></li>
                        </ul>
                    </div>
                    <div className='shoplist'>
                        <div className='tit'>
                            <h1>게임 리스트</h1>
                        </div>
                        <div className='list'>
                            <ul>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list1.jpg'></img>
                                            <div className='date'>
                                                <p>2022년 7월 28일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>Hot Lap League:디럭스 에디션</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list2.jpg'></img>
                                            <div className='date'>
                                                <p>2020년 3월 26일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>원피스 해적무쌍4</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list3.jpg'></img>
                                            <div className='date'>
                                                <p>2021년 4월 22일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>틀린 그림 찾기 전집</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list4.jpg'></img>
                                            <div className='date'>
                                                <p>2021년 10월 01일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>피파 22::레거시 에디션</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list5.jpg'></img>
                                            <div className='date'>
                                                <p>2021년 2월 12일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>슈퍼 마리오 3D 월드</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list6.jpg'></img>
                                            <div className='date'>
                                                <p>2020년 3월 05일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>문명6</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list7.jpg'></img>
                                            <div className='date'>
                                                <p>2022년 7월 21일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>월리</p>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg'>
                                        <a href="#"><img src='./img/list8.jpg'></img>
                                            <div className='date'>
                                                <p>2022년 6월 09일</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='txt'><a href="#">
                                        <p>SWITCH</p>
                                        <p>귀멸의 칼날 히노카미 혈풍담</p>
                                    </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='more'>
                            <a href="#">게임 더 보기 >></a>
                        </div>
                    </div>
                </div>
                {/*    <div id='footer'>

                </div> */}
            </div>
            <div className='bar'>
                <div className='util'>
                    <a href="#"><img src='/img/user.png'></img></a>
                    <p>닉네임</p>
                </div>
                <div className='bar_util'>
                    <ul>
                        <div className='allgames'>
                            <h1>ALL GAMES</h1>
                            <ul>
                                <li><p>액션</p></li>
                                <li><p>RPG</p></li>
                                <li><p>어드벤처</p></li>
                                <li><p>전략</p></li>
                                <li><p>리듬</p></li>
                                <li><p>스포츠</p></li>
                                <li><p>격투</p></li>
                                <li><p>퍼즐</p></li>
                                <li><p>슈팅</p></li>
                                <li><p>보드</p></li>
                                <li><p>기타</p></li>
                            </ul>
                        </div>
                        <div className='BEST'>
                            <h1>BEST</h1>
                        </div>
                        <div className='NEW'>
                            <h1>NEW</h1>
                        </div>
                        <div className='SALE'>
                            <h1>SALE</h1>
                        </div>
                        <div className='EXPERIENCE'>
                            <h1>EXPERIENCE</h1>
                        </div>
                    </ul>

                    <div className='yt'>
                        <a href="https://www.youtube.com/channel/UCRCK5FCJtomQT3b88jXI_DA">>> YouTube</a>
                    </div>
                    <div className='sns'>
                        <a href="https://story.kakao.com/ch/nintendokorea/">>> SNS</a>
                    </div>
                </div>
            </div>
        </div>
    );


}




export default Store;