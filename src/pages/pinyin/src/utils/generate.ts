export const getPinYin = (strs: string) => {
	const list = [];
	for (let word of strs) {
		const pinyin = generate(word);
		list.push({
			word,
			pinyin: pinyin[0],
			pysData: pinyin.length > 1 ? pinyin : [],
			type: 1,
		});
	}
	return list;
};

const generate = (str: string) => {
	// @ts-ignore
	return pinyinUtil.getPinyin(str, "", true, true);
};
