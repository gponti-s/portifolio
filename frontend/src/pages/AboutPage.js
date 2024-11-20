import React from 'react';
import Viewport from "../components/Viewport";
import '../Style.css';

export const AboutPage = () => {
    // fetch data to the page
    //fetchData(process.env.REACT_APP_URL_ABOUTPAGE)
    return(
        <Viewport>
            <div className="section section-one">                
                <div>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?.</p>
                </div>
                <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRUVFRUVFxUVFRcVFRUWFhUVFhUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHSUtLS0tLS0tLS0rLS0tLS0tLS0tLTAtKysrKy0tKy0tLS0tLS0tLS0tLS0uLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAABAwIBCAYFCQYGAQUAAAABAAIDBBEhBRIxQVFhcZEGEyIygaFCUnKxwQcUM2KCkqKy0RUjQ1Nj0hYkc5Ph8MKDpLPi8f/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAxEQACAgAEAwYFAwUAAAAAAAAAAQIRAxIhMQRBURNhgZGh0QUycbHwQuHxBiJiwdL/2gAMAwEAAhEDEQA/APIwlSJUAIQhAIlQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAISjTbWdA18la/ZstruZmDbIREObyLoCohXqehDjZrzIdkMbpObnZrRxuVtUPRdzjj1MeP8AHnL3Abo6cCx3OcUolnLFWGUUhxEbrbSCBzOC72boKWRuk+fsYNP7uFsI4Z984+K87yrTta8jrDIfWJvdWhZP8zdrMY4yR/3J7cnPOgsPCSP+5ZcVG52NrDaVOymA1Pd7PZHM/ogNen6OVT+5A9/sFr/ykp83ResYLyU74xrc+zQOZUeTsszQG8TIo/rSOc88nOzfwrbZ0/qg0tMvWE+o3MaPta/BNCWzmDFE3B87ODA558wB5qemmgzg1sb5Cdcjs1v3WWP4inHJ1RWSl5bdztTRhzXo3RP5JSAJqt5a3VGzF7tw2IWyn0bowcA3OJxdHCBFGBtle21xvK0+kfSNtEwxtzeuI+ijGaxm+Q957vqm2/YbHS3pLDQs+b0jWteNGZiI95d6cn1jgNWjOPldPP1k7esN7uu4nj70JR2cHRqodSPrpSTPNfNc7+DDbtPA1OIwFtA0LgI4ARgCBq4fqvoSpnbJQvYzQYi0W9lcN0bybTOgHWAZwJafBCJnlyEIUNioSBKgBCEIAQhCAEIQgBCEIAQlgaXnNYC93qtBceQxWpF0arHC/wA1maNsjDC370uaPNAZSFrjIeb9NVUsW0daJn+DKcP8yE/PyfDiRPVu32pIPe6U/hQGLsGs4DedgWxSdFa6QXZR1BHrGJ7Gng5wAPNIems7exSNjpQcLUsQbIb6LzuzpXH7SzZpnSvJqZnOcPWc6d99YznHDzQGpN0Wq2C742RgaesqKWO3HPlFlWfkvNF31FMzcJeuP/thIFSp4Is7tOkDfqBgPM4eSfWS0wwZG++17848hggJZHUrL3llk2ZjGxN8Hvc4n7gTW5TjHcpWcZHPk5i7WH7qynSt1BM6/dzVoqZsvyvKRmiTMHqwNEY5sA+KrhwBzi1oPrSHOdyP6LO65223BDYXHV4lCO3uaxyo3Q6R7x6rey3/AL4K1SdKBH3IyN4zc77zg73LAMFtKa1l9CWSjUyvlt8+nP8AtSOk/QDksqxKuxwqURBNWXREHWuIzSBYJG019ngFcbAn9XZRIpFBRt2LoskZJaSLrLpWrcpJ7Kmkk9z0Po06ngAc62CpdOPlJcWGKn7ItYnWVyFTXm2JK56ufnITKlsZ9VWFxLnG5KoMmIdcaValhTGUhUD0Ox6OdNXRt6t5uNCinykM4ljrAm9uK5ltA4qUZNk3oY0LTMgVJ0QuPAstzzkyPJEpJBAGbp7QcBxLbhviQlrMug9lmdJtfN3SbaoGmx+2X+CpPc+W3WSCw0ZxFh7MYwHDBLS3NRi5OkWTFC3vzA7mDPP4bt/EmGsphobK7ec1nlnOVuiybTkY9ZIdwLB4XGPNJWUcIwEYbvLy4+AwHMhYWJb0TPY+HWHHM5Rvpdv0tFP9pxaouZjPvhT2ZUh1x8uq+EQTo5YmYNEJ3us6/gWPt95Whlt/oyxN9nrWD8JC65/yjzrEa5LyREMo0p70bvCx/LIxWqd1A42MhZf+nJh49a5MbluY2HXRnd1kp8n3CDWSuN3wRyfYppD+Bgd5rnKN82vp/DL23+K8jYg6OUjxdtS620h7R43hw5rQg6I0JHZqesd6vzqnibfxjLlyDa2BpOfTiN21vXwH/wCR4/Cr9NlOIgWqqlt8M0vinbp/rCM8mlY7GXLEfik/YdpB7wXhfudBV9E5W4w5Op5AMbmoqZtHsvjb5LHq310RB+ZwwEXxjo4H239Y9j3D7yvUFLA43+exRm/fdAITf27MB8CV2EOS5GsB+fx4iwLpZmg8BI97OTVrs8Vfqi/Nf9Gbwn1R5hP0grHXDqycaixsr42/7bCGjks2Rgcc513E6S43PMr0bKWTsoY3+a1TdQcIpMOHVi6wp8pvhwmyZSC2sU0bT9454/CqnLmvz0DiuTOZDRqsFWmpL43v4rr6PpRQHCWjbGb6qaimHnHER5ragqcmy4Mbk87pYJIXc42hv4lqjFnnFHTSMcHNsCNGAI2aFcpchtt2nOvqLLg8CCPivR4+jtNKRbJ1PKDpdTV7YSN4jfM/O4Gy6EfJBSvaHx1FTASO4ZIX2+0wY81KZpTjzR4u2hc09iOV+97hb7uZ8VXdkSd38PN5/G69youg3za/7+Sa/wDMIIHAAKCqyWRoaOS2onNyVnjMXRmU6RZW4+jNu+V6LVZPdsWRVZOdsTKMyOXGTYm6rpr6UagtKpye4Kg8EJQsp/sy5xVqPJzR6JUrJjrTzUhAV30I4KM0wCsuqwq09Y1AROfqCjaoJKoJnzpDa1RpwuAU/wA7AWEapKJ7qFijSqKu6pumUJkTooiVLLJDusCUVK0afJjbXcUTwsboshzZFS125bsFa22IC5aWRo1prawoSjsMm5ZoKS3+SZKbYunbEwby2MdY88C9c3lPLlPnE09K1lyTpJGJv2c7ujcAFkU9A+Q9kEk6/itvJ/RSV5sxjpHbgc0eKxKUYrNJ0jopybyxWvcY02Upn+kbbG4earGNxxJ54r0/JvyVzvsZntibs18l1OTvk0o2WzpM47bLwYvxTBhotT1YfBTlrOSXr9jwyOhc7QCfBSPya4aQRxsvfsp9C42RXhGceC8Zy1kSsdM5vzadwBsM2N7gRtBAThuOeNJqqo6Y/DYOHBSjJyb7qMB0FtaRrHDQeRsrlXkWojF5KaZg2uie0cyFQuvoJ3sz570L0OVpm4Z5I9Vwzm/dKnbVwvH7ynb7URzDyHZH3Vntkvg4XHnzTjT+kw/qqLXM0osnROP+Xqcx3qShzTo9dl7463BoSk1lMM8hzWOP0jCHRuOzrYzmuO7OKyxPqe2/kVfoMovjOdDM5pOBBJaXD1S4d4fVNwozaj0Zfo+kMTsJ4sb/AEkX7t+y9mFt/ElbUUIlH+Xr3f6c13Y7L2BPBrHcVhNyjTSdmqpg138yK0TtGktH7t3ABnFTu6K5/aop+twvmYtmA9jvH7OcN6y21zr1RrTpfox2UsiTDOL42uDe8+PHNGm780Hq/thqw3Ud8WEO3Ai/kVZZlKqpyM6/ZJDfqkYHMe09k8MVqRdIaafCsgDif4gFpOPWss5x3vD1pWZk4cjnGVb26HEeKu0/SGoZ3ZXDxK2pejNLKM6lq2j6k/Z8BK0Zp8Q1Z1V0PqWYmM2OhzSHNPsvbdrvArVM5Jplqm6dVbdMrj4krXo/lHmHeN+K42XJUjdLCqr4XDS0q2y5UeoP+U9r25skd97XOYebSFG35Rog0tEV763uc8jgXLy8oulsZUdzW9LRJoaAsefK11z6VLLlNSSuUDqveqKEsZSy6qKidKSo0oUsqQ7ORdAjUgao5HRQbI1IxyQhDWHYl2WqJA5PE5GhKyElSsoXHQEGhC6qf6xUJe46ytL9m277mt9ogHlpT2iFutzvZFhzKtGG0Z0VO4rRiyO8i9ipP2lm9yNrd7u0f0Rnzv7V5T7IdbwsFTnZ7BkLolT07f39nO9Rpw4Odr4Dmt5taGjNia2NuxoAXC1HSuIHvFx2NxVf/FrvRjsNrzbyGK/P43D8VxT0vwP0HD8Lw+Et9T0Jjr6SrMdMToxOwLzpnTIj0QfEgK3B8oT24ZgA3G3wUwf6Y4mbubSXqdJtP5Gj0+ioXtF3PzdwWoynwwd7v0Xl1L8oTD3w7yK3qDp3Tu/iAe1ceZX6DC+B4eFDKlZ4sXhsWWqaf0Ojyrk1z2kPGcPZv7seS8A6ddB3QPc9o7DnEhw7TbnGx1tPG69/oekEb+65p4OBU2UKKnqWFsjb5wte2K4P4e8KWbD09V7r80PM1Jf24sdD48liLDZyRryMQvZOm/yVOaDJTnPbpt6Q4jX4cl5FlDJssDrPaRja+rhfbu0rrUl8y9jz4mDStaoBI1+nAqGWGyizlKyVaONETiVJT1TmHsm2N7ar7dx3hOc0HQoXNQHU0/SvrBmVcbZxYDOcS2UAaM2oAJNtQkD2pknRmOfGhmD3HRTTZsU//pm/Vz7ey4H6oXLkKSOYjDSNhxHJEkCSeGWF5Y9r4pG4FrgWOG4g4hXsm9Ip4TeORzCdOabA+03uu8QVs5O6VF7BDWRNq4gLBspPXRj+jUDttG4ktU0/Q2Kob1mTZ8/bTTlsc7b6mv7kmv1b6gVbo1kctUXKH5SHkBtTDHIPXYyMP4uY4FruDcxXosqwVHcZSSk+g4PpZuFnSGNx9lzuC83raOSF5jlY6N7dLHtLXDiDioQVbMUel1GR4z38nzMP9J4lPLMFuay6jIdIO86eE7JYv7SSsLJmX3xgML3Bo9EgTR/7b+7xaQt6DKz3i8b5RgcaWV7xxNLI4P5GymvI0q5lU9G4HYsqovtZ7PztCZ/hFx7kkT/ZkYfcVaGVKhxsyeGc3tmyZkcg3Fs7cTuaSkkrqpuD8ntO7qW349hoKlvoWl1KT+h1QPQceGPuULui8w/hv5FWJMutb36Frf8AeZ/5pW9Koxogtwkf8SVL6oV3oqf4dl/lu5FPHR6b1H8ip3dKmn0H/f8A/qoH9Imn0CeLj8LK6E1Q8dHJdbHeOCd+wrd5zG8XNHvKpPy03+U3xzz/AOSdHlF7u5EPCMH811dCWy5+zohplZ4Xd+UFTMomeiyV/BlhzJ+CgjFW7uhwG7NZ+UKOfJtS7vZ3i5x+KAu9WRojY3e+RpPK4UUrzodOwDYy48g0X5rLkyXKNN1WfRuGlDRou6gaXvd7IazzJd7k01kA0RZ29znHybYeSynRlRlpUJlNkZaLe4xjPZY0Hna6jflyU/xHfeKyCE2yWSkaD8sP9EBvAXPMqtJWyHS93O3uUAF1fyfkWebGONzgNLgOyOLzZo8StZ5bWbcpS5lIyu9Y8ykzztK3P2PBH9PVRg+pEHVD+F2WjB+2rcdLT+hSVso2uLIG/hjd+ZS31JTOabM7U53gSpo6yYaHv8z710ZDdWTmD/UqJnHkJWKxTdV6VLC3gSfN9Yqp1+r7mkpcjBpukU7D3vgeYXTZJ+U2piti63HOHwKmjpaN+Dh1e/su5D5273Jk/Q+CT6CoiJ1B5MTidxeGt8yu0cfE5Sv87zusfGjpm89TtskfLLGbCYDicPePitHKWUsmV7cSxriLE207ja4I4rxvK3Q+oh7zHAaiQS08HDTyWI6KSPHFv1gcOYV7eO0om4cTldyh5ae6Oy6SdDWNcTTyNI1acw8CcWnjhvC46ponxuzXNLXD0TpttG0cFagy5M3DPzhsdj56VPLl4vaGPja5oN7EnxzTpYd4PG65TUN4Pwf+n7mcaXDz1gnFmS1+1PI2LTFFHMLxOJPqn6VvFowlb9Zva2hZk0DmWzhgdBGLTvBXJO9jzOLSsjKaQn3ukzdipka1xBuDYjQRgVqUGVy1wJOa712gY+2zQ4cLHistJZW+RYycXaPRX9KmSxNZVwxzx6AH3LRt6icfvIHfUOGGhUJ+iENQC/Js2cdJpZy1k43RvwZL5HcVzEUb2AvheHtt2xbVsfGdI5hS08tyHQnMeP4ZOB/03H8px2EqKGXQ6TxVia1r9/Aq1NI+NxZIxzHtNnMeC1wOwtOIUQbbHQRrXbUfSWOqaIK+Prc3steezMz2JdNvquuNyoZW6JvaDLTO+cRDEgC0zB9ePWPrNuOCjTMJp7mQ3K0hwkDZgNUoznDhIO0Oav0OVmNwjlmp/q366G/s6ed1gkpucqpMjgjuWZaqC3HMnb60Lhnf7bgQPurNqaqGXAljXbJoQ0/fjt+Vcw2Qg3aSDtGBV1uV3EWlAkH1hjzW87ObjRZnyK84saxw2xuvyGnyWfJQvBsWOB2K3GI3YxPdG7Zc2Vj9o1MYs60jd4DgslMUsI1EeCv0OV3xnUQr7MtxO78djtB+BuByUmZTyd1zeDhb8Q/RKFl+i6YtGDm2WgOk0ThpC5uXJAPdF/YIPle/kqE1CG6SW+0C33hXUaHU1GUo3aCFk1MzTrWR81dqIPAppgeNRUNIsTOCrPSFjthSZp2FQ1YwlNupczcjq9yENl2VIY8IKdjT685+cSbiGWETfuHiqNdlmSX6V75LaA9xzB7LG2A8FmhqcGj/ALghLL0eWZGi0Yaz2Ghp+8MfNV5q6R57Ty7j2veow7YB7/enhztvLD3KUWyMOdvT2uk1F/hdLmE6ynthO081aIqAdf8A1PxJzKiVuIvxGB5txUjGSDQ944EqbrpxpcXe0A73qUzdLvLmSumFTDg15sdLTi08W6D9oOWy3pHSzj/MU4a7XJD2D4gYHgGxjaVyxmPpRMPAFh8k5lUwans/EP1UfeX6M3Kno7DKM6nma7Rg60bsdVxdjj9Vpcdq56uyPLEbOafEWPDZfcCSrDJm3u1wvtaSx3/KnOUHgWNyNF+47y7LvFpUV9TL70YQcQdYIPAgj3LXp8sBwzahucDpeBdx1Xe24zz9YEO3nQleYpMDYH61mH+w82KnU5OLThfHQDgTw28Rcb1qhGTjsWavJGHWQOz27AbkYXsDYX4EB27WsrOtuKlp6h8RuxxadG4jYRoI3FaTqqGf6UdVJ/MaCWE/WGkf90K/U3UZ7aP0/YzC8HvYHaPiEwi2nmFYrsnvitnC7Ti17cWuG0FVLq2c5Jp0ySN5aQ5pII0EKyc2TYyTkx/9rvLgqYKUFLoxRcAJJEl2uFgHm+B1B+sjfp4rSyNl18TgM7EHAg+4hUKPKBaM14z2EWxxIG47ET5NODou006No4reTMriL6nX1MFNWjOfaKU/xWAWcf6jBp4jHiudyj0ZlitnFtj3XX/dv9l+i+42O5UaWsfG6xuCMP8A9XV5Ky9hmmzmuwcxwu1w3grn9TWvI5CbJkrdLDxGI8lVcwjSDyXez5Ga/t0chifpMLndg+wTh4HmsSWrlY4smiaXDSHNzXeStIzZzgBWpQVDhgcQtGOspj343N4YhX6ZlIdEgHHD3rSjexGyoMkslGAsdyzq3o9KzEC4813WT4IRoeD4rYJizbEgrosJvc5vEa2PGxUPYbXI3FXYctPGBJ+C6rpBk6F1yLLiqqmDTgVylFxZ0Ts0RXxu70bDvtY822T29SdGe32Xf3ArDTmvKllo3Ooae7KR7Tb+YPwS/NXanxnjcH8vxWOyoKmZVFAaRpZNTWngWfFwSfNpf5Xlf3FVW1pUgrkGpki6ljpyVcDGtT2uJ0CyNqO7O2HhOexDHR7SnkMamVD7YXuVLk7JMk50ta3W57g0AeKx2iq+RtYeuWKtkLqsDQFdybRVE5tFE528DDxOgLSa2jphg35zJtOEYO5oxPiqlf0jqZBm3zGamNs1o8BgufbSl8q8zo8JQ+d+CNiDo65v008EW7Oz3cm3U7qalaMah7/YjFvMrjDO69yR4laFLlprRZzQ4cVVBveRh49fLHzZo1VTSjC8x4tZ+qzpXU7tDiOLLflcfco5cp05/guP2/8AhRftSMd2nb9ouPxW1CubMPHk90hZMnMd3XtPjb8wCrvoJW6L23YjywU5yydUTBwA/RR/tI/y7cDb4LVd5M0XuqKhe4aR8PcliqS0WaSAdLTZzTxacDyVs5Qae9f7QDvPSonmN2wcP0KaojinsxDM13eFjtbiPFpx8/BQyQawQRtb8QcQh1ONRUZa4JZlxZPR10kdw0gsPeY4ZzDxGo7xYqcwwy/Rnqn+o89g+zJq4O5rPztqd/3eldCqbqnqh1TSvjdmvaWnYdm0bRvChV+lr3tGZdsjP5Ugu37ON2ne0gqR1PBJ3HGF/qSm7PsygYcHD7RWbrcZU9jNxVujrSw4G20aimVVFJEe20gHQdLXey4YHwKiFjpW4za1Rlrky5lGRrznjSdIVaGQtxCOp2IERGlJzzOzUVyNigyrvXQtyjHM0MnaHgaHaHt9l2pcO5msKSCtc3SspklCtzqKrI5Azmfv491hK0b26HeCzmUMb+44X2HAjiCnUOWCMQbcFpTPhqMZBZ+qRmDvHatGDJfkl7dBKjMUw9J3Mq/JT1EWLHdczdiQN7D8E2DLbDg9ltpHxBVBly9brLlVfCdd110LopO64HdoPJK+gbsULZxhgSdSutfk0KB+TEoWcz1SURFb7snKJ1ElCzH6tLmLUNKk+bpQNml6MNbjLM2+wYlR109JFgLvPH9Fz1TlGR+F81uwfEqoItq8S4aUnc5H138RhhwyYMF46lupyg0nssA8FVM7joCcGpV6VCKPmzxpzdtkRLjrSdWdqmQtnOyMQp4hCUJwKAGxhShoUYKUFQEwAUgaFAHJwcgJTEFE+kCeHJ2cgKT6S2hQljhrWmSoXtQFAu2hNVp7FC6NBZHfapWy6jZw2HHkdIURakuqDSoqstuI5MwHTHJZ0TuNwRzHipJ2xH6WJ0BOh8XbiO/MJ0ey7wWUCrFPUluANgdI7zD7TTgVnJ0NKXJlyPJriLxubM3+ncuHGMgPHHNtvUDKgt0HwPxCc5rD2rGM+vHdzL7xpafHwRVSSkXeRKPWPbPi7vDxSmtyUuRZjroSLSQj2mHMd8WnxCrVUEZxjkuPVeM13PQeY4KgSOHmkVLnexIBY43VmCVw7rvAqlnIzlTJ0FPlRzDZ4LTtV900Uw7bQ4+sOy/mNPisCiys5nZc0SM1tdjyOpasFFBPjBIYn/y3nDwK0jD0EmyPrieHfVf2XeDhgVGKueE2dnN3PGc3wKJ46iE9tpI2jEc1JBlrUdGw4jkUopZgy5fvMB3sPwVyPKUTvSsdjhZZr4oJMc3NO1ht5KF+THfw5Q4bHix5qA6ABp0EHgU10G5cvIySPvRuG9uIT4crOGiTwdggOhdTqM0yoRZafraDwVhuW262oDmUqEKFBIlQgEQlQgESpEqAEt0iEA66cCmJboUkDk4OUN0oKgJs5NKbdF0II5ROUpTHNVBC4KNwUrgoy5AMIQCnFNIQD45CDdpIO5TCcXxGafWZhzbo5WVVKHK2wWn2Omzt7cHeIUXUj0TzTBY6MOP6oxB/771NORRC22kJwgJ7va3DTy0qYOIGINjrwIPwPNKYAcW+WriNIQhUIStcRiMFO+R3pjOG3X4O081EQNXI6f8AlAbOTukT2jNf2m71elZBMLiwO5cqQnxSlpuCrZKNKpoXMxabjcq8eUHtwKlhylqcicNeoUsQZZO1WDVRP7zGnfax5hYEkRCaCUsUbjqCI4tcW+ajOTX6pARx/ULLZUuGtTtryqAQhCgBCEIAQhCAEIQgBCEIAQlQgC6LoQgC6W6RCAXORdIhQojlE9iEKkISLIuhCARCRCAE5ryP01IQgJYZ83RhfSNLTxBVpjWuxHYdxOZf2tLDxw4JEJZUrHOdiWyAg6zbHxbocN/moKiltiLEHQRi0+Oo7ihCslTItUVr7UFCFAIlBQhALnlIhCASyRCEB//Z" 
                style={{ width: "50%", height: "70vh", padding: "30px"}}
                />
            </div>
            <div className="section section-two">
                <h2>Our Mission</h2>
                <p>TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?".</p>
            </div>
            <div className="section section-one">
                <h2>Contact Us</h2>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
        </Viewport>
    );
}