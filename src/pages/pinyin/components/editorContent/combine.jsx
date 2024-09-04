function renderCombine(data, options, isPreview = false) {

	const {
		wordStyle,
		pinyinStyle,
		showWord,
		showPinyin,
		fontWidth,
		useFontWidth,
		pinyinType
	} = options;

	const { pysData } = data;
	const polyphone = pysData.length > 0;
	// 是否展示多选的箭头
	const showSelectIcon = polyphone && showPinyin && showWord && !isPreview;
	const showInput = !isPreview;
	let pinyinFontSize = pinyinStyle.fontSize;
	let wordFontSize = wordStyle.fontSize;
	if (wordFontSize === FONTSIZEDEFAULT || pinyinFontSize === FONTSIZEDEFAULT) {
		wordFontSize = useFontWidth ? `${(1/fontWidth).toFixed(2)}em` : '1em';;
		pinyinFontSize = useFontWidth ? `${(1/fontWidth).toFixed(2)}em` : '1em';
	} else {
		wordFontSize += 'pt';
		pinyinFontSize += 'pt';
	}

	return `
		<span class="py-item">
			<span class="py-pinyin" style="font-size:${pinyinFontSize}">
				<span
					contenteditable="true"
					class="py-wrap ${showPinyin ? "" : 'hide-remain'}"
					style="color:${pinyinStyle.color}; font-family:${pinyinStyle.fontFamily}"
					>
					${wrapper(data.pinyin, options)}
				</span>
				${
					isPreview ? '' : `
					<div id="POLYPHONE" class="pys-chooser ${ showSelectIcon ? "" : "hide"}">
						<span class="py-down">${decorationSvgs.pys_tips}</span>
						<span class="py-masks pysChooser"></span>
					</div>`
				}
			</span>
			<span class="py-word" style="font-size:${wordFontSize}">
					<span
						style="color:${wordStyle.color};font-family:${wordStyle.fontFamily}"
					>
						<span class="${(showWord || data.type !== 1)  ? "" : 'hide-remain'}" >${data.word}</span>
					${
						isPreview ? '' :
						`
						<input type="text"
							class="py-word-input ${showInput ? "" : 'hide'}"
							autocomplete="off" style="font-size:1em">
						`
					}
					</span>
				</span>
		</span>`;
}