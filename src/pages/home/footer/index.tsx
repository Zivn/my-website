import React, { FC, MouseEventHandler } from 'react'
import { Col, Row, Tooltip } from 'antd'
import Fade from 'react-reveal/Fade'
import Lottie from 'react-lottie'
import footerGif from '../../../assets/lottie/footer.json'
import footer from './index.module.scss'
type Props = {
  className?: string
}
const Options = {
  loop: true,
  autoplay: true,
  animationData: footerGif,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const imgs = [
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABAJJREFUaEPtWV1SGzEMljccJH3skJ4BGNJzlJwEOEnhHA3DcoaG6WNzEBJ3FMWRLMv27oalMIPfMvGPPv1+0jr44Mt9cPnhE8D/tuBxFvj1+xxOTtZw8XU9GMjjn+kx5/sDwAc3m2sAOAeA6V7wFpxroWnuOwmzXP1U5/GaFiaTRafzQlv9ASxXj/vHbaU7t4CmaU1BHp6vwHsUPrd6g+gH4OH5Gry/Ua+j+wRLhL9iQchqQeta+Pi8czdweXrb1SX7AViu/OFi7y/g+7d29xtjwTkUUAJZw2Rysft/s0Gryf9a8P72cF4rZjL50tWVugMgLf7dA1jDfPYl0RIJcmVYhLeii12e3iVnlyu8m0BK5VRM0R1A7L93MJ8tzLtta+DWNXi/OGhdH6bARvAAOZDGg68PgF0K3YZXTavvBgC5mvZ5sgDGRK5mjA6AXCNotYX5jAI0dQWZZkOBI9/GDJOrFTI916wl3uzuQt2DmNMsCtI0U/AeCx+DsNKkzHDzWWe5Om/cgZaZAlPddovVGLPG2V5A+l1fVLlxbbdPe+sE69oZLnNnXwBcB+pCDt1RjhV1ax0Apc8fRfowVNTyOSp2FbKYB5DP5/JZLEjo2+w6pQBMqUh6PgVVrB8pgDJvwQeZhWIcxCkzn52CYDJdhuLG2Q2zVuBGZX61vy8FYLFNyTBjLcZETGYPcj0KbufuDww1rRN8hyRydJ6zFwmcxEcMINYO5W2d8uJ6wAaXe23KzfTDZrUAFonTvYOSiQHEeb5MqGQ6DZoJ5C4nHBUyJnKlO3QcaJIogDKA+OGyL+vGJDa91TMEkfJWqPUBGaohAchuKc82URSt5dh9mFWmGaUEwKbZVvCL93QMcKEqUdrUxzm4Sm1jDFQXxbzVddyJZKEBxP2u1d/qWAkaqluBBewTxOneCKiVRrkzCgHq3O0hDZbSqMwiqLWmOQPvkczdHxqZnAIoyDnr2Wk0sVLfQoYELK66sheuBSIKGbsfVdm4kOEb1JnFy3SxY6kEPoaFiB8sxU5aQ9LzR1MJfQE9GiqiLu/j0Di69Q6cezIHAOLVOhsNm/Ot4muDeGU6LcWTXRMG7MvLdBeouLzH2Oja0NBYBTWMCyd5PLIBGKUjG9JSBpAcpDa/ouDm7DfKYGt4Ux9P5LoMA0Zp6rsOtrQ22QXLve7oY5U+ACzKXZu2vRsAuX7hQwy2bCKnx+f294PRh7vat6VL2JMLogmULvXoPZ44xFYbdS6kuX48OuSAjXlLuQi+4QeOfIZh0UvBWv9+UJ9qqLrfnUrElCK4RMjxqEV83P5moMmG/ZGv3AVmCEt/APIi9N3wmWkoI3rzz6xDBR3p3HEWGEmoPtd+AuijrTH2/gOcwKNPUXN7GgAAAABJRU5ErkJggg==',
    title: 'React',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAhdJREFUaEPtWV1OwkAQngF8x3oBSMTEW8BJpI/gIcBDSB9bTwKewoSa0AuIvIsdsyUN23b651a3JMtrd4f5vm/2m9kWrZVPcME/NAA0q2cU0CwAGAWMAooMmBJSJFB5u1FAmULFAEYBRQKVtxsFlClUDGAUUCRQebtRQJlCxQBGAUUCme0UAOCgatzqCiB6IXw9VQ3MrevA1QKIpplnCMsQji+H2X0QP+s7b4Nu2B0TwqIIUA0AsNzPRkoALOfdlQEQwIbwaMuJp8EJIB3oPQDBkiNFK4AQj8Oi5GU1kHouAozTIPQBQF5RwTgHynL8BadCdQA5xS/K4HM+msiPrdV2V3YQOfbPL9koAERPlKwAlMe++M/WAGAZRvTYQy+x1RoAN8/bKSG6dV1OIwCYHGajTaL0cuq8CJQ2ANzZEYmW2ebvXajhQyzChZhVQbbOIv+P12lT4JQABSF+T/6nkf2BAjGI2DKLar11fSCb7Nn784Bcr/x1uhtrLiEu1ROQ9HAnVnJW20IAMShxPtCWrTZyKOrtZNiaAVBAgAE3pEVJRuPErV00pmgCUG3WQSL74/HOSwJIflXVAICC/fxuKCfFNS+u0bWmhMoaWF5f4KxUgwLVGljan/qOP+4QrFs0SpT7fmKsSLlPo6MEISTuyh0it+xCc2Yy9n14zVhmdBcWLwHy31Iol1Dd+b3p9QZA04zWjXfxCvwA/ebZoAk2dsMAAAAASUVORK5CYII=',
    title: 'Typescript',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAAFP0lEQVR4nM2Ya04jRxCAqw1GisLrBus9Aa9ESrRhYX/DKuYEgRNgTkD7BAwnwDkBRgu/18CuEinhdQLMDcwjirTG0/v1GIMf3TPjFaz8Se2pGfejqruqpqeV9EH+58/T9UZjV0Tl5EUw1ezQ0Er5nzfn3KQitQH5xbPJ+s3tGU1y8qJgxPjYTLkyU+MmkdQGLM8eayOyifjioFRx/3ReSwqom0z+l79y9S/3l4jfBZSqDY8Mz5T//rUqCVA3meW5411jJI/YH8r8yS9eof7gtz9oe3DydlUSUJRYln86XjShfERMDZ0eDg9lCq1gtMF/3wgDI7LAbWpURt7t/ztfkRgYK56lueMzMTKNmIarjDKFDydvy8g9vJ87yodGBYivKMkoOT84mZ9B8hJrwPvZz6uhhDuICZhrJSpIE3g2m93f3BWMmALDT/Aoloxk1j6cvimJB68BDwNdGpFJbv3gq9lsVqcJuHaixFCv66T4QMHa8Pjoa19a5X83SWmThodMj47zUa3/zwlo/UNVPNgYk1DsWAvcOlExaZX/eolmx582r1hWHbesWptJpe7WjQkLDDHJo5LI2IbWqiYemu7aCKjvdKvsyPBr1yo7DSBwP4qRRemCykWWM/Atp0Xrm7yI2aJ2TjowNaVEb25ObHPj5MFtiY/eladtef9kfgWxA3TqxC6pI21eMAN51wy00PpuWiRE8V7DOzFVQnNN67GKeHjwgDLiFOUR5UirPQYszR5d8jgnbVDJ64PWXURutxBXpT8qOAaGuOPDGYOOtIpuTyzNfiowQ1aZDqjkNKBYvN1s8/NvxL4XRovd8eE0AIi/jrSKbk0e/M+ZNqnUYwC+XubyO+UZMOdaT3TMrM8AdOlIq9w3Yb8TGCPriD1QyWVARWJSX79oPc4wT/gMsBDQ2wR0AdHqxuw3g+YS0QmVBsoAC0klSqtRI1/abEGlgTMApSoE9Dv1sMHa5ZEXeh48A8CmVUXFiklQhJ4H0gCCYU8tzR6fI05RvNDzYBrACxYD3Lm/HXoeSAPsOyFqxCpUJeYjg0qDaMDVwel8Lmrk2f88QqWBM8AGsN0XPTaiQcV4FKLSYBlA8B6c/JZHsro1iXuZUclhwG1A7KwjPgd7GJDn+kicAa2XmAC6PeFrRKUeAywYsYgRgSRkMT/mit41ypeki7S6cP+E3dDVb26rPJ6QNqjU0agbra8L9kLNjnbxmKLIeNC9C23hNsBcc+yYa23kLIrSQfPTLtxBfEKpEj63huSl+V1wpxlkXeLZwwkKvu+AFktzn3bEmFVpw6bN9q20RVF6IK2ec5miPMHeQylWgsiXGJof8vWS9Ab4BZ2g+FhFYogyomHmu/ZmKHqIFyxKFzzvJerEl1ZZjWx2qNgKIh9kqTyrESBOUjT7/YCrlyiJ1Bso3jnrLVppU7pwGmBZmjsq+c5saFTjEvBhsd3uj9+CjTs+pNYR7cf8JNdeOHvynZOii5toRr7Uz6kywa0HU80o2fAdJSbR3AnLFmPkxAuBO5Kd9q241wCLOxM4ID6ymcxG6zA3CXvYWw85wejycxcoWMT3tXjgfz92ees3d1apV5RkbHyM/bjhc6uov9v/UNzt5w6usuOj077+LLEGWJrLrHYRU0GHdjB70Fvk+girucnF7+cOOOleSXJPRUmEwSsMvIDYBxxgqYzOKFULw0YgonLSByh2yCQsSgLUSyby2UZ4hvjdyA5lZtLEVCoDLHFp9dmJSZvdpDYgCkDHPun5IW127XfiSG2A5cGVSiIyRXkJLnCd1TSu0+IrkDaycu+pY9IAAAAASUVORK5CYII=',
    title: 'Eslint',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvtJREFUaEPFml9u00AQxmfTp7YnKOEhlajELVpuABEPfqO5AOUGKTdoeoGaNz8FbtBwC6QgYQSBE1BewIvWeCP/md2ZtWdlS32Ks/5++83szDhVEOl68vrXUil1DQC51jr9fHv8NsajVIxFz64e7gHgorm2Trer44X088QBcPF72Zvt6uiZJIQoACHe6s63q6NTKQgxAKZ4cQgRgEDxohCDAaiYB9A5gLp0hMzgcBoEQIm3CVs7UjGOQRC9AbjireJYEL0AQsXHhAgG6CueBaHUYntzmIYcsUEAQ8XTEOHVmg0gJd4LEcsBafEOiF5tBulALPEW4umb37NPN4c5Fvc/nyezkw8Z+pm93wsQW7xLtFZwp9X/blYDLB6vM2diOwHGEG8E7+bJEgDMHFG/rqfrDJ0nUICxxFcAXwBghriDQnQApMR/nyeXCuC8EpJPCnhHxbPHAcvTgWgASIj/9jK5mBRwh+2iieeDAjYUyG6euFwwIA2IPYCgeDNO+i5nPNsvmdOnmIBZBwulBkQJICG+eqjZOfKaFHBKucCFUESXyC4uVcyb0OFc6XSdkQM+B0KdXT244o0tnpF8DSilYfPofcYa7gmIXBLA7L5r8mq7kk/XGXuwd9QGs2ZOhBC/OwwJoRAHfOuadZTpRf4UxavqLRoSvzwIRryyKmv9JmJTShfLU0gKwmN1XRcrfDjizaL7OiAI4cyF0nINC+oI5YpvAEg6YarxwV9YalUWIvOXaoCPvq7SWlRVclcx7LjX6YWknOAUA+yeHy+Se9tKtz5HQw/tRseE2M0TLASdeeOcB8aCQJpBb9J7J7KRIc41wFcqb8iZOCZEsw/j1Zt23pAAkqdT/eFoBxzrtYo0hLt9D3eB5YDdOYlw8s4eMR2QgJAYnHrlQPtLfZyIIb7TSoRUzxCIWOIHAfASGzbVprR+M95vVdDUh21wUBJjC9BOOH0dLH6wA/zE7kCIiBcDYIaTpRATLwrAhBAVLw5AQIiLjwLQgihfs8T8d5t/OixTh3nXOgQAAAAASUVORK5CYII=',
    title: 'AntDesign',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCVJREFUaEPtWOtt20AMJqXsUWWMIi5iTxJ7j7iR6+xRZZI4qIOMEXcPSyzIe+hOD+ssn1AEsH4ZlsTjx8fHj0L44hd+cf/hCuB/Z/CagWsGLoxAtBKiX+9LQPgGSJn1ifAgv8vkBfPv6nfk6yIA9Lz/DQBzIKid7ndwB0AbXP/YxcRwNgDa/pkD4JM4PurCHNd3m1GvdrwUDGDQcYQCKnyTM6pERTk9ZkBJBgnd+5miRaxMBAGg7f61M+Laafx5VwxFVHokoSddbjtczxZD74TcPwlAR52d9y92/Jhuzm1M6RmCJQBMD4C2708AlHuej3Tc2HBsTgugVTIIByBaXVq3jt3pADhpNoGLchjlHxmk5acYJVyF9M3ZPdAqG4QCH2erEENDz9joIxzwcXY79HzofdvEXoTU21EiLwH3WCwehbLtGkDNEPxvlCjpoKhpHbl0TIYEQDv6l09LpY2IndfX5Ta7ykoBUPLA4fv+NNPz/hMq3PC0bc4BPaz8qRuJwfp64nwAzCY35auZqGIYIesWdMNRl+zflKytYMxwdHvgs3Yi4GBVIg91hYCSy6yHOrJTl+oxg/LmYLLnMh+uZ0HSxs1GDcCtWU77MV2cKxVOUZ/fZ3WApCRZjo8kDg+xP8SGs9B02C41HQtMV6Qb5DGKtlspa4II2aZadNkxQ2i7J90vlqJlPnD/SH1BBmV6e27WO2uuMZF3UKarPsO+87QAxAdWnG49W3vCSJDxPct8hCvZF1ilOhJDsikEUR3cnmlmvbdpPP3e0xO+xlfU69a0EYDqPyxkXxY5LUBlRrCssDNDAWQyaG97fK/CTVNDnd4HfMoEk2J9IDOQOkg3YGsglqnSPCzi+HdSzf3hVs8bHzgWQPBXoi9Xcg9Ac0XXWLgraRBtNRQqr4tsTG1hTuq90jOg9OJvBJx1FBwmCtzWpOw4cw6IMAD2RdNwSg6bxjT1XjsnacmZACT6bm3XtClK12aT8EWyM0CnevC9GpofLqG01GIMc0BaqmFHC24sca6vfBiA4KCljT5vedaGUrscBNXUZu8epm+piArfOIj9TWz0kaNl7CE6ojoDyhFXzUpp4Uoiap+t069XVWE3veSosgyU8JJpPWh7aNR+hfCGSwuAKQfjLIM1nA6w46YTlrFkgIXds+Wd6qBqmrM6HHkxLYFN7k0jtwdZvcy3JqMdRtCgzFoQOWUmxxlqNV8j1JNuT+Qf2TnDiwG4u7kvJZyyaa59rr63TevKcNMLps4dzrYy+4TQO6WjTt1rANCfUhq78CnNor+PjpLCY51232uKOaMM7TLf2qxG6JUYjvbZaGTA+4QoTegvKnEX8hjAukuorZiifNiK4fCgmLMNp5cMMzCmODyGzSApEeOgqWxcAUwV2VC71wyERmqq564ZmCqyoXb/Aewt/U9MlQIEAAAAAElFTkSuQmCC',
    title: 'Sass',
  },
]

const links = [
  {
    link: 'https://www.baidu.com/',
    label: '百度搜索',
  },
]

const contact = [
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAxBJREFUaEPtme1t4zAMhl/D3uNyk1w6SZtJ2k7S3CRNJ2luDwc+0JECWSYpUrYDBKj+pEEsmY/4zTZ48NU8uPz4AUg0uOuA5wHYNcAu+TzTMw1wHoAzfQL46oHTGtpfqoEo9AsJ7RGIYACcLsA7rn9XrVqAUXAAb1VvTTYtBXEDdMDrGoLn4MG8jv1VI+blAaBb/wCwN59e8SCBXIAnq1lZAXYt8Om18wr5xy0eCAsA3fx3rTC1+6wQRYAO+NzabCRIC4QKoAh/inG+9obTfUl+4Pzr1F99gl0igBRtBuB4AQ7htOpwykUd6cKyd05ANICBQx6AwwU4Zr+lWZgy7r+QcW+PkcbClz/0GxculUsTIxML0AIfDfDiAFjDkqDlGEkLM4DuGufJcdklaGAVgBagkoRyzWwFkzvkNdQMQLv9cOqbN1ta6WrezQF8awlLcyiroNJzJYAQVn+n+3OAYtLqATqgunosQBbfD+ApNaMJgGaDW5tPBPPKkAOI0Yde0I99yearpIVJYpsIpJUNnP1thVIoX2SAFhAdeEvnzS/Cc5G5Btjsey/7jyCFhEZZ+RaJPABqUbWmOZXCaeqLuRNrOeCeAJopqxoQa/87O7FmynVRKJjIJImsaTbWPJAHk9wH1InDPbTQjS2xvPJiMgdQK9Gto5FlZJOXMu5aqHZ+UzK3UuSJ+/NqoKacjmeRM1FrubSwM8+buGTK1TaTWiQ2EqElfE1L7TgWpGEt02Zql562oGznx23mKmG2OEtTeWYy4m1ZTcti55zw5pYybOYqwtiJadViMcyWWlZFbezZ3rFKPGQG4Sn2KoZlYhur1fczc8lnQi2wb4BfoVf4a3VopxnVDbaiKaVDXWkyUAqRTLlsyTdxyDvpgfOzLB0WF5Xcc/zsxaWuKz5e9CkLAB3GjtfjTJNCbFqjGzSiAng0bQUQIaQMWYAQAbz1lgdghJD+N+Zs+CUA99DMCxAvlkyKsvItiy4EqC5LagFuIEEje22Gz5hTDNEkuDn8cma5FMDgr9s+8gOw7f2WT394DfwHkQVBQN6lupsAAAAASUVORK5CYII=',
    label: 'github',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA8JJREFUaEPdWltW20AMlSZZRsMxO+gh/YUkK4GshLASYCWY8NtwugNc0l0UWz0aR448fo4xSdx8JfFYoyvd0dyRjdDTZzv/MYckmSFiQAkEhBAgQEAAEU+BBBGa9HuS0PPZy+tDH1NjVyNv8+/BODHX1mGCG187DMwghJ8F0wnA9uriFgBXvk5XjWcwCPQwWb/e+dr0AtC3466zXYC0AmDpEo/uAWHuG6Eu4xlIbOLFefjLrpm6TyOAdHHSU5Ohvq+3BVEL4FjOSzDaUKoSwLGdz2eUVlULvBTAaTkPYDNhcDkJf4YuVQsA0vo+euub05+1V7UmCgC2l9OnQ1UbX1AM4my9Odf35QC8X17cIOK9r+FDjieipZYheQBX0zfWL4d0yHcuNwsZgK/eZX0drd28EB6+PW+WViTKwO3VlPqc5Ctt6SxYAEPgfiEgBhdcVi2AP7PpfRdJ/JVRbrRNEE5eNgsLYEj00TKDSyoOkj6CwuACB0mfjF+0qgUgahCMef6Aj4j1OUsNvl/OB+6YMYzz+whL8R1fZV4rV2AcUJwEgHib33toxfPxApW5+L5RbOYIeJ1TCQQhlkmHOvGUlV2WHADAC0k7Jt8FbKqr9mqShaIEg8fK2VqOqJP1plIhFw5WDOC9ZPfVRniDI8AbHaU06hB8mPhcTk11Gkq2f61ydZBEQOr6rqmt/y/YcCuQ1hrNsnofWXaC02wMztySLDbdgpFzzMloYW3u6n4jgLZR5fRLa4QQH7VWd2khNl254kacbYpEcJkhNtwgFCm0Q2r3Bw9pLWD+Ynzn0komL1a8fQZTh/etFReA0FoDsDR0nUQllLJIEs5l9UunjQFyY4q7cHwt68Cpk5M4LJPLb/esK07l6OtoM7GRyyIv4vJ9oPoMupceFNU1ojRX6ypLjtM7rV84FaoyrP3lYGOVjNatPxyZrD+T1W6CiIAeraRV17k/muvaEYQyLjc2SWaF6ka0tLZKbMAI065dTLfChhTAkfo+jWKtxQCmHJ7qIb6F/8DUTNWoR7VpY/gQY6TYpAAGSCOpWBbAEGkklS0TTsM6F+zLfAbAaplk9HTqbRWrgJVi/b8aW4d+kOFdrZyDkd0YXSOnSqWyvmgpgJOtSkol66BXHt9OqipVOF+Zgezc2/PjVG/Op5rdduCq7m18yHesNdGmsdCYAUF9aBBVC7YsC40Z0CD41QJXw3eiRcVNbZ5Kure2BuACGeSrBhp9XRulTVZstAkiQAq7vCMhc3hnoMw5DYav171uQ0QREfzu63Wbf2HE1nIeQz45AAAAAElFTkSuQmCC',
    label: 'csdn',
  },
  // {
  //   img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAwCAYAAABJy8k0AAAAAXNSR0IArs4c6QAAAxxJREFUaEPNWdF12zAMPLhrNKk2abxJPInpSZxOEo/iJh2jNfMoSwqtiCQAEXTza4bEATgcABHu8Pd48Ht4dBvgcHZ0voMJoNaPPjj/SsDT8O55A2zvAb4Z8M757h9wjEBPPvfA7t3RS8sgNAH+3fmnDfCaBUZwb3s6tAJvDnzgs2MCemnFe1PgMz4zsaMJ762BPxOwB9BxUaNRypsCD2BDUbtc+V0EfwG2fxyd2E5acdAc+Gjbo/NHAM8JW88XYNcKdLChGfDw2FKh88Dp3dF2RfBU/9oUeLDwwflP3jfi85JnVgEf9Pko7b4C7/8CnSS1pwaIcKqh92rgX9LWMHoLDdBqvVcBT+ozwW08ftXsvVMNUKgN34Cd9i0R8Fy/PfJorUExHzkNkFYCRcBHTltrMsfBo4OaAGdq8mfQFLxnDTTXF1ZpvyjicRoO3AsNSakjYxci7kBTQ/vVwIMTBKlfHDw4fO4dr8ii6jou7cWXFg4t+MwC3keR8FMqS4Ve/Ib3492WfC7huEn12HiNLHF5H+4mwgkexQWFhs9xrUjh6IFn0q3IzXkaCXhfHi4UfE7Uii84iGOodBkomcFrjakBR1h6LC0zo+ZqWmqShpvlUF1PsO+OLtRQjFsrYtr0qS7hprQ/5t4d7FjL51xA5ndPxY2T8sPFJryXtp4SGVyi6k1Vl3BTw/vEBwVx6ykJUmqltdi5sbmpGEPnUiNdO2n4zGpgpkHk+mGv2ItrilG/fiL8kG5Sara12V69RkpxFSB3TsJnbq1gDSk1PS11BDe1pWMqC3gkecUWEwB7DC05wXJMZQMPRt6shvNWiyVvfp11lomA1xhDS1G24LOoqpcMtJA8Kz5XBV671bXkc3Xg4UKJ5KW+uFjz2QT4Gt4LnAauPpcoOv4uLm65iyW89x6/CQifjrN/ms6wdGf4vSpwCe85xmnGVM69JsCFvE/aWTu15w9Vj/j4gESPZ0aJx1RulONzZsDHR7gyFc5bpnaziMcPsVpdxUZVE2mTqp4zJCdd1nw203GJ52eS14TP/wXwSPK6N0c7idNqnv0A+AVDT0f/uPkAAAAASUVORK5CYII=',
  //   label: 'juejin',
  // },
  // {
  //   img: 'data:image/png;base64,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',
  //   label: 'qq',
  // },
  // {
  //   img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA8dJREFUaEPdWk1PE0EYfrdpUTnoQQ8m0gIehP4CNUYtB/+BxpMCid41etQI0aOJ3j0AejL6DzwAGqP+AsCDLgUTDnrQAyqUHfNM+5bZ7e7OzH4U6iSktDvzzvO8n/OxDvV4c3ocP+VGYGno4JBUTqMxRMWiW3X/uHkoKxMCAFvwvHEhRI0cpxYD1CUhXEE0h8/qemMhLalUBFYqfQ8E0QQRNbVt31yHaHakvjVtP7Q5IhGBDIAH8SYmYkUAruJ43nwKjesU7Qohpqtr27O6jvzcmMDSQLHmFAoAn3ezsoYRgZbLTOWNXJXvEE2ZxIaWwHK5NK/JLPnxEmJhdG17LG6CWAJ7ofkgWJ0lIgl00ee1FowjEUqglW2+aiV3r4MrPG8yrPCFElip9M20ClT3IOpmioiHDgJZaP/Ilev089VzHSTr58LzxoJW6CCQRvvll2+o/8wFCX7j7k1rgNoBIVboILBc6RNaQREdTr7/TKWBQWsCGIO/zY9vtVMHreAjsFQuTTiOM6OVYkEAwNAOX75Gv16/oO31VTr++BmVys31H4P//uQh/Xj6SDt1MCP5CNgULfj50Vv3JADT9uXcKUnk2O370koghO+QZUqAiNzR+tZw6FrI1H0AGu6Cpvo7uxBcYePOjbbmARgNBHgc/oc1oAQ8tyBAqhu1LWDjPtAY3IBBAQiaSmDt6iX5W7BvFgRUN/p/CNise/aBBbCLm4SF2xawyf9ZEoArQh7HhFFCUOpBJgQQiOzv+ERMbH5YlL/9/vTOFy8cAyh0yECcxRD0JnVACs2SAIAUT1So8a3eTqsggJwOEv1nL4YSSJOFWgcBHS6EEwajXZfOhdTUmlMWCo2BXiLQ3m7uplGLTfteW0AIMcknF7sEmkcmRpsYHQG1qnKlReytDB6gkdW/vgLIWciqEhcKw3xUmWgtpBIILps5oIHy0OnzMkWiMUAmgDjBgg7LbwQ9gtq0jda32rh9BEyLGRMw3bQglXJfJgBCyFy8njIFr2YgXyHDF9PdGHI3r39MJ+Z+QReyHR+7H4AwmyW17eTon4qAyY7M1ApJwGMMgpo3NrYyjPbEMlv08qmETSzYajBN/zDtdwSxOsF+OpmLAh9LoOVKxsuLNNqNG5v4bJSFmtaGXAikPZ3meJAXeIYr1cyIGIDXupAKppuW0LmNikt7weEL7G7ckUWcQkdZ1opAwKXSXK8G8VjdiyW2QNAahpfbcWGRGDgLtbZAGBr5WsHOTs0hGje4T5OgPc9b3POb+ijV+t6TQKf9/q5EZqkzgaB/R9r4TwTq1RcAAAAASUVORK5CYII=',
  //   label: 'email',
  // },
]

const Footer: FC<Props> = () => {
  const handleContack = (info: any) => {
    let label = info?.label
    switch (label) {
      case 'github':
        let github = document.createElement('a')
        github.setAttribute('href', 'https://github.com/Zivn')
        github.click()
        github.remove()
        break
      case 'csdn':
        let csdn = document.createElement('a')
        csdn.setAttribute('href', 'https://blog.csdn.net/LaityMm')
        csdn.click()
        csdn.remove()
        break
      default:
        break
    }
  }
  return (
    <div className={footer.footer} id="contact">
      <div className={footer.content}>
        <Row>
          <Col span={24}>
            <div className={footer.top}>
              <Fade left>
                <div className={footer.mask}>
                  <Lottie options={Options} height={120} width={120} />
                </div>
              </Fade>
              <Fade top>
                <div className={footer.hearten}>
                  <p>键码编织技艺舞，代码乐章奏前端。</p>
                  <p>
                    前端的海洋中，我是一名航海家，航向的是未知的领域。技术是我的指南针，代码是我的船只，我坚信在这个无限的数字世界里，每一次冒险都会带来新的发现与成就。
                  </p>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} lg={12}>
            <div className={footer.left}>
              <Fade left>
                <div className={footer.lCenter}>
                  <span className={footer.text}>个人主页使用了：</span>
                  {imgs.map((item, index) => {
                    return (
                      <Tooltip key={index} placement="top" title={item.title}>
                        <img src={item.img} alt="" className={footer.img} />
                      </Tooltip>
                    )
                  })}
                </div>
              </Fade>
              {/* <Fade bottom>
                <div className={footer.copyright}>备案号 &copy; 前端奇遇记</div>
              </Fade> */}
            </div>
          </Col>
          <Col span={24} lg={12}>
            <div className={footer.right}>
              <Fade right>
                <div className={footer.contact}>
                  <span className={footer.text}>联系我：</span>
                  <div className={footer.contactItem}>
                    {contact.map((item, index) => {
                      return <img src={item.img} alt={item.label} key={index} onClick={() => handleContack(item)} />
                    })}
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className={footer.link}>
                  <span className={footer.text}>友情链接：</span>
                  <div className={footer.links}>
                    {links.map((item, index) => {
                      return (
                        <a key={index} href={item.link} target="_blank">
                          {item.label}
                        </a>
                      )
                    })}
                  </div>
                </div>
                {/* <div className={footer.copyright}>备案号 &copy; 前端奇遇记</div> */}
              </Fade>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Footer
