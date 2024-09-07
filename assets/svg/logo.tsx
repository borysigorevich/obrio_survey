import React from 'react';

type LogoProps = {
	onClick?: () => void;
};

export const Logo = ({ onClick }: LogoProps) => {
	return (
		<svg
			onClick={onClick}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={'cursor-pointer'}
		>
			<rect x="4.5" y="4" width="15" height="16" fill="url(#pattern0_1_1276)" />
			<defs>
				<pattern
					id="pattern0_1_1276"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use
						xlinkHref="#image0_1_1276"
						transform="matrix(0.0169643 0 0 0.015904 0 -0.00892857)"
					/>
				</pattern>
				<image
					id="image0_1_1276"
					width="448"
					height="64"
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAABACAYAAACN4qcfAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAwkSURBVHgB7Z3vlRQ3FsXvcvi+OAJEBIYIXI4AnMBSdgBe8PcF4QDWsAFAEwGQgGkiABLwyAmscQI729cqnR6aLklVXX9U1fd3jk7PtGq6q2pKunrSe08A8Bjr4DJSXqAMasTPc85ygTKwGO6a/oC/rre78qr57Hu7YrBMDOLXW2NeLtB+bm9RBgZl38NzoN6VCgVwHb5TIE8gxLq40RTT/H7vSt2HXXm6K+92xUEIMQV/gze6OFjaYmauNa8W5VhJQkzB7V3ZwDdEPvsGQoixqeHbWoUCrMBrV36uIREU50kNP0V3H0KIsaD19+jIz7Nx7eD3elfew08bCXFOGHiLcC1r4kKURo3PZ1oqzGwFXjvyHqeGOBqWCIpzxEIiKMTQ3MKXFh+twOeYkest71MEaQl+CzkITInDfDiUDx1X3nQ4/ib8iDOUXOyufNyV1xBCDAGXF8yR901T9xIzkXKNN1gGawiDMBAW4/wfDfZrfbkhFKXNghgoDOJUDMq+h2uE1l/snv+GmdratUS9gX9wDYRYNg5+jY+zGreQtnjZIB9ACHEKIewhBtvjLG0tJYDEQCIo1oXblTtIxyH9E0KIUzDI867+ETNYgTkCSAy8CN6GEOvg0658h7glyAZZQQjRhxzrL/AVZrACcwWQGEgExbqgCH6fOKaCEKIPBt1iaye3ArsIIOHJUQTvQYh1sEXcCtSAT4judLH+ApNbgV0FkFAEmVi4i7ILUTKx0IqbEEJ0pUI/jaAVaDARfQQwsIEChsU6+BCpU0IIIbqRSnO2QbsD2leYMEXaKQJILCSCYvk4CCGGokb72jnj/rjz0M+I//0kSw+nCiCxkAgKIYRIW38UPgdvAb6MfMa/MQEpAczdK81CIijWyScIIXKp0b6Gx0xBm+bnYAm2UWECD+yUAPKEmTnjA9LYXfkFQqwLCaAQecSsPwref/C5QUV9edLjswYjZwrUIV8E6cL6AkIsi9h6w0cIIXKo0W79uV15euT9Z2gfZFYY2QrMXQPkCVIEc7Lj1/BhEvKeE0vhbqSulCTOQpRMyvprs/SYdP5Zj88chC5OMCF1VM62FQyUP7anYEgtxRyLL6DMMmJ+DOKjzHcQQqSgD4hpqXOI60bKChwt5vw6ulPDn2wqUXDYWJcdyNfN78esQgrhHQgxDzZSt4HWAIVIwd0c2kQq5exCghV4zJEyZJTJMbw60zcMgmt9qYsiFD0KZYX2KVEeI+cZMQdsWLHRZc4zLsS507bZLXHIE69naI84MBgpRdopcYAWw3UQvLgKQkwHxc9G6jdQgLwQKWj9tYXA5Vh/AVqBbcHxYS1wcL+SITLBDCWCnAqV44wYmwp+at5GjnGQ9SdEilTC6y26TV1u0B5tMEqi7D5rgIfY5vXUQHjTfMZDnC8Gw+Nw3nBQxWn2b5DnVh08nh2EEDEM4mt/P6Ab/JufduXXlnomymYoxWDr8kMIILHwHUafGEBeDFX/IxRzNYbLPTvzLdZBhfx7ZODFr8usgkN6k1whRNr626BbO2I7ZfTAN5FjghVoMRBDCSDZNK8xEbwqdnzdQp2NyMdgvK1SGOPK2QcHIUQKg7j1F0t2HaiQPzMTGNQKHFIAyQa+AwmB8BS5d81rKEKUBJ9JCt8WQogc+lp/V628e+jn8xG2S/oJAzC0AJItvGcQUQyVKJ0QhsOBGkeWDkKIGBXyrT8e29XKS8Fp0MO8or0YQwCJhE8sidvYx6xu4D1AHYQQh9D6ex6pf4O96PW18lJwsMr26nAiYwmgEEulboqFQiGEOKRGfB3+XlOGhAbVFvuwiuK8QIfC4LxH3g4ihkP3lEg3sfcI7ZJ31jZ/c85hOUJcZZItihqC/wid07YYiTkF0MB3SBV8J8VXdjhchznXTkfxZ3EcTnOBDiJYw0/RmMTxIfBWIihE2vo7hdGsvBhTCWDYBSIIHTsh03Lsg+b47yHEsFxtZKRGPIs94fP4O47vZSbEuTCG9efg1wxHtfJijCWAFfY7QPBng27Uzd/SIpJDjRiLDXzjs4jvbvIY2hlCnDc1Trf+Qhw42xyFz2FmxhTAU1Ojhe2UlJlDjAkb5YPmte2ZvYGBM1AIsSAY1tbX+nPYW3kUv6EHkSG28HWfzz41GXYbFsPs3xRE0ECIcbGIT8PQQhzDpVuI0oltd3RIWGbggPFWUx407w0lfiFkidrAXSReoGei7DHXAGvs1/xOwcBfqBxExNhw3fmipS6MNDcQ4nyIbXYbcBjfyquwD8A/NhDtlSJtLAswMNT0pYEsQTE+DnErMJaoV4i1EVKemYP357DyXiE+C9Nru6SxvUDD1jLHxIt1Dn7EwBudGmWYXXnffJ5yioqx4NR91VJXQYjzwWDfLzvMb+Wl6GwFThEG4eAtQY4kPmI/ynZHjks5zvCmBMeYLYQYnm2kzkCI84EzHrSqxvLYNLtyF35pgRbfqWvsnbdLmioOkCOG7xLHWOTtKRhEsMYwjjZCXMUl6g3KXYsu2UnnT4ilscGwhEQUFDwKn8Hw0ArcILONlpYKbQNvvlIEb2QcS8VXgLI4F1JTO3MLYOz7HcQ5YjCslZeCmsCZxKxEKmM7wfSBc8y5AfDcxubUeEMhlsInxNvFTczHDUgAxX4tj4bJRVOeYp/q8hQum0KnmNeR47LDNkrdDYJTpneQ5/lpIcT54NCe1Juj7LlSCFaJejmurReD8ay8y+Z1C58cO7zScfJXHH/uWMdZxG+RoOTtkBzaPUgPsRBiGEyifmjvt67QkaxNAMPoe4vpuZeolwCuhzHX8oLgsZ3RyqPYvcGX7Y7HcbuyquVzwia8W0QofT9Ah3wRFGIIbifq5xbALeIhQ48xvQAaxM9pC+VRXToG01t5KXgMHSGPPXshhnGLjC9vKymPzKkw8HPJlz1LKddRI36eBsKi/f68xfhsIt//HvPDjif1vFeYlg3i53Mf5WAQP9caghyu5V0OWP7XlP/C7y5/H/0FlUH4f0S+p0p9wBKEg/AGsQOSAK4bi3kF8ALlP0e8D7HniNcwlUdoVdC55GAgAWzD4PPsK5cDliB6XLd7jGGzKlmc0GcsRQBJiAGUAK4XixMe5hOpEf//3EUZPEAZz7xB2jqwKAsDCeAx6Dx1OWAZ0spLwdCH3lbg3I2oDxtIANeKxTwCaBDvzNnASrFkeB45I/THGA+DtPhdoLxn2kACeAinEVP/yy6iN4aVl8Ki/bx+i/3hEgWQcG5aArg+LKYXQIN0B1BaW7DIe/YZKzu0cBvkdZj3UR4GEsBDLE4TPFp5fM74/55rkJiyAlufxSU1+kMsJIBrw2JaATTI68wNyoIdTc55XzbHpbxbc+EaUY71+QplYiABvEpX6++qlce0Y0M9V0MQWxqgSB8V5yULILGQAK4Ji2kEkI3hMfI6c4syqZDfcYV20KfD4r2q0U1wDcrEQAIYYKgAwwhyBC9YeVwHL8mp6Sq8ntgzao/9UarBLAELCeBasBhPAK+6dud6uV2gbHIcYg4LvalpyVVo78wMfMxXl3tVuvgRAwlggNZfTPhKtPJS8Jltu6YvrMDSA+FzsfCBtr9g2bzFfDhkpA6aGYP8Durv8OsCN5qfb6N7Q3Yo/55QoII1m8ttfJ5E3h3Up/J6tsE2ONQm2HNRQn7h17vyEONCa8lG6je78gOWB7PGbHHc8/PodklrsAADNZZtAc5ZLlAGFuXcjyWNfC3mv18G5WNQxvMVK88xPinrz2C5VGi/ts+swBJ3gziFDXwSbaVdEqfg4C2/D1gOFj6Wy2F6tvDtzkEsgRzrz2G5hHRqxwhW4F+sTQAJOy12Xg5CdOcZltuZb+Cf/ZeYBg40HyJ/+zJRBtWu/KOljuu9P2PZ0NJ7Eql/hMbCXaMAEomg6MoGflqIo8Mld+YOfqqd1zKWEPL+PGm+4ynEkqD11zbFSuHgANBh+cSswJAo+y9ic9EvsGwM/NpEKddRo7z1hqtrOCVgMd01v22+r1S37iEw8B6fffPoHt4vftaS75fBfG0st4y5BhhLecaMKQbrIbXOWa3FC7QNB28J1hDnjIO3Wjgz8Cf8yHCL85i2c/CjepYQBkLnnq+b3w2+9PoMO8/zfv3evL6GpjmXDi2ff8ELwCF8z2Jds2YO/rn/saX+0f8BZcjaYLOwLLIAAAAASUVORK5CYII="
				/>
			</defs>
		</svg>
	);
};
