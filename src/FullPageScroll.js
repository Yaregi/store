import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import './FullPageScroll.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import $ from 'jquery';


const FullPageScroll = () => {

    const slick = {
        dots: false,
        isFinite: true,
        speed: 1000,
        slidesToShow: 1.65,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        infinite: true
    }


    const slick1 = {
        dots: false,
        isFinite: true,
        speed: 1000,
        slidesToShow: 1.65,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        infinite: true
    }


    useEffect(() => {
        AOS.init({

        });
    });



    const SectionStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const SectionStylemin = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const SectionStyle2 = {
        height: '30vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50vh'
    }

    const SectionStylemin2 = {
        height: '70vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    $(function () {

        $('div#pcWallpaper>main>ul#background_top>li:nth-child(1)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, rightslide2, leftslide2').children().css('filter', 'none').parent().siblings().addClass('rightslide').removeClass('rightslide2, leftslide2');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li').removeClass('leftslide2');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(1)>.logo').css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(1)>.logo').css('opacity', '0')
        }).on('click', function () {
            $('div#pc_detail_game1').fadeIn();
        })
        $('div#pc_detail_game1 .close').on('click', function () {
            $('div#pc_detail_game1').fadeOut();
        })
        $('div#pc_detail_game1 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/9vK5qi5J700?autoplay=1&mute=1');
        })




        /* ********************************************************* */






        $('div#pcWallpaper>main>ul#background_top>li:nth-child(2)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, rightslide').children().css('filter', 'none').parent().siblings().addClass('rightslide2').removeClass('rightslide, leftslide');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li').removeClass('leftslide2');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(2)>.logo').css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(2)>.logo').css('opacity', '0')
        }).on('click', function () {
            $('div#pc_detail_game2').fadeIn();
        })
        $('div#pc_detail_game2 .close').on('click', function () {
            $('div#pc_detail_game2').fadeOut();
        })
        $('div#pc_detail_game2 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/6fBk6458qW4?autoplay=1&mute=1');
        })



        /* *********************************************************** */





        $('div#pcWallpaper>main>ul#background_top>li:nth-child(3)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, rightslide, rightslide2').children().css('filter', 'none').parent().prevAll().addClass('leftslide').siblings().addClass('rightslide2');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(4)').removeClass('leftslide');
            $('div#pcWallpaper>main>ul#background_top>li').removeClass('leftslide2');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(3)>.logo').css('opacity', '1');
            $(this).siblings().css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(3)>.logo').css('opacity', '0').css('transition-delay', '0s');
        }).on('click', function () {
            $('div#pc_detail_game3').fadeIn();
        })
        $('div#pc_detail_game3 .close').on('click', function () {
            $('div#pc_detail_game3').fadeOut();
        })
        $('div#pc_detail_game3 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })





        /* ******************************************************************** */





        $('div#pcWallpaper>main>ul#background_top>li:nth-child(4)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, leftslide2, rightslide, rightslide2').children().css('filter', 'none').parent().prevAll().addClass('leftslide').siblings().addClass('rightslide2');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li').removeClass('leftslide2');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(4)>.logo').css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(4)>.logo').css('opacity', '0')
        }).on('click', function () {
            $('div#pc_detail_game4').fadeIn();
        })
        $('div#pc_detail_game4 .close').on('click', function () {
            $('div#pc_detail_game4').fadeOut();
        })
        $('div#pc_detail_game4 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/dCy1Wt4XTaU?autoplay=1&mute=1');
        })





        /* ******************************************************************* */





        $('div#pcWallpaper>main>ul#background_top>li:nth-child(5)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, leftslide2, rightslide, rightslide2').children().css('filter', 'none').parent().prevAll().addClass('leftslide').siblings().addClass('rightslide2');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li').removeClass('leftslide2');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(5)>.logo').css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(5)>.logo').css('opacity', '0')
        }).on('click', function () {
            $('div#pc_detail_game5').fadeIn();
        })
        $('div#pc_detail_game5 .close').on('click', function () {
            $('div#pc_detail_game5').fadeOut();
        })
        $('div#pc_detail_game5 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/QZMaL6mp35Y?autoplay=1&mute=1');
        })


        /* **************************************************************** */



        $('div#pcWallpaper>main>ul#background_top>li:nth-child(6)').on('mouseover', function () {
            $(this).addClass('crr').removeClass('leftslide, rightslide, rightslide2').children().css('filter', 'none').parent().siblings().addClass('leftslide2').removeClass('rightslide, leftslide, rightslide2');
            $(this).siblings().removeClass('crr').children().css('filter', 'grayscale(100%)');
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(6)>.logo').css('opacity', '1');
        }).on('mouseout', function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-child(6)>.logo').css('opacity', '0')
        }).on('click', function () {
            $('div#pc_detail_game6').fadeIn();
        })
        $('div#pc_detail_game6 .close').on('click', function () {
            $('div#pc_detail_game6').fadeOut();
        })
        $('div#pc_detail_game6 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/9w7IpMNBpMU?autoplay=1&mute=1');
        })


        /* ************************************************************* */



        $('.movieWallpaper').on('click', function () {
            $('.movieWallpaper').fadeOut();
        })

        /* ****************************************************************** */


        setTimeout(function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-of-type(3)').trigger('mouseover');
        }, 4500);


        setTimeout(function () {
            $('div#pcWallpaper>main>ul#background_top>li:nth-of-type(3)').trigger('mouseout');
        }, 6000);


        /* ************************************************************ */

        $('.bar_switch').on('click', function () {
            $(this).css('display', 'none');
            $('#mobile>.right').stop().animate({
                right: '0'
            })
            $('.bar_switch_active').fadeIn();
        })

        $('.bar_switch_active').on('click', function () {
            $(this).css('display', 'none');
            $('#mobile>.right').stop().animate({
                right: '-100%'
            })
            $('.bar_switch').fadeIn();
        })


        $('#mobile>#mainVisual>.moredetail').on('click', function () {
            $('#mobile>#tit_detail>.detail_game1').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail .close').on('click', function () {
            $('#mobile>#tit_detail').fadeOut().siblings().fadeIn();
        })

        $('#mobile>#tit_detail>.detail_game1 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })


        /* ******************************************************** */


        $('#mobile>.slider .bg2').on('click', function () {
            $('#mobile>#tit_detail>.detail_game2').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail>.detail_game2 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })

        /* ********************************************************** */


        $('#mobile>.slider .bg1').on('click', function () {
            $('#mobile>#tit_detail>.detail_game6').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail>.detail_game6 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })


        /* ************************************************************* */


        $('#mobile>.slider .bg3').on('click', function () {
            $('#mobile>#tit_detail>.detail_game3').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail>.detail_game3 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })


        /* **************************************************************** */



        $('#mobile>.slider .bg4').on('click', function () {
            $('#mobile>#tit_detail>.detail_game4').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail>.detail_game4 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })


        /* **************************************************************** */


        $('#mobile>.slider .bg5').on('click', function () {
            $('#mobile>#tit_detail>.detail_game5').fadeIn().siblings().hide();
            $('#mobile>#tit_detail').fadeIn().siblings().fadeOut();
        })

        $('#mobile>#tit_detail>.detail_game5 .info .movie').on('click', function () {
            $('.movieWallpaper').fadeIn().children().find('iframe').attr('src', 'https://www.youtube.com/embed/hbI1BPgXTQI?autoplay=1&mute=1');
        })


    })

    return (
        <Fullpage>
            <FullPageSections className='pc'>
                <FullpageSection>
                    <div id='pcWallpaper' >
                        <div className='intro'>
                        </div>
                        <div className="logo">
                            <a href="#"><img src="img/logo4.png"></img></a>
                        </div>
                        <div className='gnb'>
                            <ul>
                                <li><a href="/store">스토어</a></li>
                                <li><a href="#">지원센터</a></li>
                            </ul>
                        </div>
                        <div className='search'>
                            <input type='text' id='sc' placeholder='검색 내용을 입력하세요'></input>
                        </div>
                        <div className='user'>
                            <a href="#"><img src="img/userw.png"></img></a>
                        </div>
                        <div className='global'>
                            <ul>
                                <li><p>EN</p></li>
                                <li><p>KO</p></li>
                            </ul>
                        </div>
                        <main>
                            <ul id='background_top' className='' >
                                <li id='topClickCategoryPc_1'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                                <li id='topClickCategoryPc_2'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                                <li id='topClickCategoryPc_3'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                                <li id='topClickCategoryPc_4'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                                <li id='topClickCategoryPc_5'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                                <li id='topClickCategoryPc_6'>
                                    <div className='img'></div>
                                    <div className='logo'></div>
                                    <div className='cover bgcover'></div>
                                </li>
                            </ul>
                        </main>

                        <div id='pc_detail_game1'>
                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>별의 커비::디스커버리</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>3D 액션</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1~2인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://www.nintendo.co.kr/software/switch/arzga/index.html">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/9vK5qi5J700" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>



                        <div id='pc_detail_game2'>

                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>슈퍼 마리오::오디세이</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>샌드박스 탐색 3D 액션</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1~2인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://www.nintendo.co.kr/software/switch/aaaca/index.html">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/6fBk6458qW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>



                        <div id='pc_detail_game3'>
                            <div className='fog'>
                            </div>
                            <div className='fog2'>
                            </div>
                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>젤다의 전설::브레스 오브 더 와일드</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>3인칭 오픈 에어 액션 어드벤처</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://www.nintendo.co.kr/software/switch/aaaaa/index.html">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/hbI1BPgXTQI?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>




                        <div id='pc_detail_game4'>
                            <div className='fog'>
                            </div>
                            <div className='fog2'>
                            </div>
                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>포켓몬 레전드::아르세우스</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>3인칭 세미 오픈 월드 액션 RPG</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://pokemonkorea.co.kr/legends_arceus">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/dCy1Wt4XTaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>





                        <div id='pc_detail_game5'>
                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>모여봐요 동물의 숲</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>커뮤니케이션</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1~8인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://nintendo.co.kr/software/switch/acbaa/">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/QZMaL6mp35Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>




                        <div id='pc_detail_game6'>
                            <div class='info'>
                                <ul>
                                    <li class='switch'>
                                        <p>SWITCH</p>
                                    </li>
                                </ul>
                                <h1>스플래툰2</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>출시:</p>
                                            </td>
                                            <td>
                                                <p>판매중</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>장르:</p></td>
                                            <td>
                                                <p>TPS</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>플레이어:</p>
                                            </td>
                                            <td>
                                                <p>1~8인</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='movie'>
                                </div>
                                <div className='site'>
                                    <a href="https://nintendo.co.kr/software/switch/aab6b//">OFFICIAL SITE</a>
                                </div>
                            </div>
                            <div className='close'>
                            </div>
                            <div className='movieWallpaper'>
                                <div>
                                    <div>
                                        <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/9w7IpMNBpMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className='close'></div>
                                </div>
                            </div>
                        </div>
                        <div className='splash'></div>

                    </div>
                </FullpageSection>




                {/* ****************************************************************** */}




                <FullpageSection style={SectionStyle}>
                    <div id='cont1'>
                        <div className='tit' data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400">
                            <h1>NINTENDO SWITCH GAMES</h1>
                            <p>닌텐도 스위치의 다양한 게임들을 만나보세요!</p>
                        </div>
                        <div className='move_left' data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="700">
                            <ul>
                                <li><a href="#"><img src='img/cont1_1.png'></img>
                                    {/*  <div className='txt'>
                                        <p>짱구는 못말려 나와 박사의<br></br>여름방학</p>
                                    </div> */}
                                    <span></span>
                                </a></li>

                                <li><a href="#"><img src='img/cont1_2.png'></img>
                                    {/*  <div className='txt'>
                                        <p>제노블레이드 크로니클스3</p>
                                    </div> */}
                                    <span></span>
                                </a></li>

                                <li><a href="#"><img src='img/cont1_3.jpg'></img>
                                    {/* <div className='txt'>
                                        <p>마리오<br></br>스트라이커즈<br></br>배틀 리그</p>
                                    </div> */}
                                    <span></span>
                                </a></li>

                                <li><a href="#"><img src='img/cont1_4.png'></img>
                                    {/* <div className='txt'>
                                        <p>몬스터헌터<br></br>라이즈</p>
                                    </div> */}
                                    <span></span></a></li>

                                <li><a href="#"><img src='img/cont1_5.png'></img>
                                    {/* <div className='txt'>
                                        <p>소닉<br></br>오리진스</p>
                                    </div> */}
                                    <span></span></a></li>
                                <li><a href="#"><img src='img/cont1_6.png'></img>
                                    {/*  <div className='txt'>
                                        <p>포캣몬<br></br>스냅</p>
                                    </div> */}
                                    <span></span></a></li>
                            </ul>
                        </div>
                        <div className='rightbar'>
                            <div className='book'><a href="#"></a>
                                <p>상세 소개 페이지로 ></p>
                            </div>
                            <div className='shop'><a href="/store">
                                <p>다운로드 ></p>
                            </a>
                            </div>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStylemin}>
                    <div id='cont2'>
                        <div className='tit' data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="400">
                            <h1>NEWS & UPDATE</h1>
                            <p>새로운 소식을 알려드립니다!</p>
                            <a href="#"><p>MORE NEWS</p></a>
                        </div>
                        <div className='news' data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="700">
                            <ul>
                                <li><a href="#"><img src='img/1.png'></img><p className='date'>2022.07.21</p><p className='name'>『제노블레이드 크로니클스 3』의 공식 소개 페이지가 공개되었<br></br>습니다.</p></a></li>
                                <li><a href="#"><img src='img/2.png'></img><p className='date'>2022.07.20</p><p className='name'>Nintendo Switch 『마리오 스트라이커즈 배틀 리그』무료 업<br></br>데이트...</p></a></li>
                                <li><a href="#"><img src='img/3.png'></img><p className='date'>2022.07.15</p><p className='name'>Nintendo Switch 소프트웨어 특집 『여행지에서 가볍게 즐길<br></br> 수 있는...</p></a></li>
                            </ul>
                        </div>
                    </div>
                </FullpageSection>
                <FullpageSection style={SectionStyle2}>
                    <div id='footer'>
                        <div className='footerin'>
                            <div className='list'>
                                <ul>
                                    <li>
                                        <a class='sns' href="#">SNS</a>
                                    </li>
                                    <li>
                                        <a class='yt' href="#">YOUTUBE</a>
                                    </li>
                                </ul>
                                <ol>
                                    <li>
                                        <a href="#"><img src="img/f1.png"></img></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="img/f2.png"></img></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="img/f3.png"></img></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="img/f4.png"></img></a>
                                    </li>
                                </ol>
                                <p className='fm'>
                                    <p>이용약관 | 개인정보취급방침</p>
                                    <p>고객지원문의전화: 1670-9900<br></br>
                                        (평일 오전 9시 30분 ~ 오후 5시 30분)
                                    </p>
                                    <p>※토/일/공휴일/회사 정기휴일 및 특별휴일 제외</p>
                                    <p>ⓒ 2006 Nintendo of Korea Co. Ltd All Rights Reserved.</p>
                                    <p>상호명:한국닌텐도주식회사 대표자명: 미우라 타카히로 사업자등록번호: 120-87-03578</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </FullpageSection>

            </FullPageSections>

            {/* *************************pc*********************************** */}

            <div id='mobile'>
                <div className='header'>
                    <div className='headerin'>
                        <div class='logo'>
                            <a href="#">
                                <img src='./img/start_logo.png'></img>
                            </a>
                        </div>
                        <div className='bar_switch'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='bar_switch_active'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id='mainVisual'>
                    <div className='logo'></div>
                    <div className='moredetail'></div>
                    <span></span>
                </div>
                <Slider className='slider'{...slick}>
                    <div className='bg1'>
                        <a href="#"><img src='./img/mbg3.png'></img></a>
                    </div>
                    <div className='bg2'>
                        <a href="#"><img src='./img/mbg4.png'></img></a>
                    </div>
                    <div className='bg3'>
                        <a href="#"><img src='./img/mbg5.png'></img></a>
                    </div>
                    <div className='bg4'>
                        <a href="#"><img src='./img/mbg6.png'></img></a>
                    </div>
                    <div className='bg5'>
                        <a href="#"><img src='./img/mbg7.png'></img></a>
                    </div>
                </Slider>
                <ul className='news'>
                    <Slider>
                        <li>
                            <p>2022.07.21</p>
                            <a href="#">『제노블레이드 크로니클스 3』의 공식 소개 페이지가 공개되었습니다.</a>
                        </li>
                        <li>
                            <p>2022.07.20</p>
                            <a href="#">Nintendo Switch 『마리오 스트라이커즈 배틀 리그, 무료 업데이트...</a>
                        </li>
                        <li>
                            <p>2022.07.15</p>
                            <a href="#">Nintendo Switch 소프트웨어 특집『여행지에서 가볍게 즐길 수 있는...</a>
                        </li>
                    </Slider>
                </ul>
                <menu>
                    <a class='store' href="/store">STORE</a>
                    <a class='store' href="/store">SUPPORT CENTER</a>
                </menu>
                <div id='footer'>
                    <ul>
                        <li>
                            <a class='sns' href="#">SNS</a>
                        </li>
                        <li>
                            <a class='yt' href="#">YOUTUBE</a>
                        </li>
                    </ul>
                    <p class='fm'>
                        <p>이용약관 | 개인정보취급방침</p>
                        <p>고객지원문의전화: 1670-9900<br></br>
                            (평일 오전 9시 30분 ~ 오후 5시 30분)
                        </p>
                        <p>※토/일/공휴일/회사 정기휴일 및 특별휴일 제외</p>
                        <p>ⓒ 2006 Nintendo of Korea Co. Ltd All Rights Reserved.</p>
                        <p>상호명:한국닌텐도주식회사 대표자명: 미우라 타카히로 사업자등록번호: 120-87-03578</p>
                    </p>
                </div>
                <div className='right'>
                    <div className='rbox'>
                        <ul>
                            <li><a href="/store">STORE</a></li>
                            <li><a href="/store">SUPPORT CENTER</a></li>
                        </ul>
                        <div className='yt'>
                            <a href="https://www.youtube.com/channel/UCRCK5FCJtomQT3b88jXI_DA">>> YouTube</a>
                        </div>
                        <div className='sns'>
                            <a href="https://story.kakao.com/ch/nintendokorea/">>> SNS</a>
                        </div>
                    </div>
                </div>
                <div id='tit_detail'>
                    <div className='detail_game1'>
                        <div className='fog'>
                        </div>
                        <div className='fog2'>
                        </div>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game1'>젤다의 전설::브레스 오브 더 와일드</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>3인칭 오픈 에어 액션 어드벤처</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://www.nintendo.co.kr/software/switch/aaaaa/index.html">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/hbI1BPgXTQI?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game2'>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game2'>슈퍼 마리오::오디세이</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>샌드박스 탐색 3D 액션</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1~2인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://www.nintendo.co.kr/software/switch/aaaca/index.html">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/6fBk6458qW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game3'>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game3'>포켓몬 레전드::아르세우스</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>3인칭 세미 오픈 월드 액션 RPG</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://pokemonkorea.co.kr/legends_arceus">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/dCy1Wt4XTaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game4'>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game4'>모여봐요 동물의 숲</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>커뮤니케이션</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1~8인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://nintendo.co.kr/software/switch/acbaa/">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/QZMaL6mp35Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game5'>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game5'>스플래툰2</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>TPS</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1~8인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://nintendo.co.kr/software/switch/aab6b//">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/9w7IpMNBpMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game6'>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game6'>별의 커비::디스커버리</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>3D 액션</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1~2인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://www.nintendo.co.kr/software/switch/arzga/index.html">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/9vK5qi5J700" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail_game7'>
                        <div className='fog'>
                        </div>
                        <div className='fog2'>
                        </div>
                        <div className='info'>
                            <ul>
                                <li class='switch'>
                                    <p>SWITCH</p>
                                </li>
                            </ul>
                            <h1 className='game7'>젤다의 전설::브레스 오브 더 와일드</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>출시:</p>
                                        </td>
                                        <td>
                                            <p>판매중</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>장르:</p></td>
                                        <td>
                                            <p>3인칭 오픈 에어 액션 어드벤처</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>플레이어:</p>
                                        </td>
                                        <td>
                                            <p>1인</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='movie'>
                            </div>
                            <div className='site'>
                                <a href="https://www.nintendo.co.kr/software/switch/aaaaa/index.html">OFFICIAL SITE</a>
                            </div>
                        </div>
                        <div className='close'>
                        </div>
                        <div className='movieWallpaper'>
                            <div>
                                <div>
                                    <iframe id='yt_play' width="640" height="360" src="https://www.youtube.com/embed/hbI1BPgXTQI?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='1'></iframe>
                                </div>
                                <div className='close'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fullpage >





    );
};




export default FullPageScroll;







