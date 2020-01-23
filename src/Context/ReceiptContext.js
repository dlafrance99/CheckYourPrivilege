import React, { useState } from 'react';

const ReceiptContext = React.createContext();

export const ReceiptProvider = ({ children }) => {
    const [Total, setTotal] = useState(0);
    const [Tip, setTip] = useState(0);
    const [Bill, setBill] = useState(0);

    const [Male, setMale] = useState(0);
    const [MaleOwe, setMaleOwe] = useState(0);
    const [Female, setFemale] = useState(0);
    const [FemaleOwe, setFemaleOwe] = useState(0);

    const [Advanced, setAdvanced] = useState(false);

    const [WhiteMale, setWhiteMale] = useState(0);
    const [WhiteMaleOwe, setWhiteMaleOwe] = useState(0);
    const [WhiteFemale, setWhiteFemale] = useState(0);
    const [WhiteFemaleOwe, setWhiteFemaleOwe] = useState(0);

    const [BlackMale, setBlackMale] = useState(0);
    const [BlackMaleOwe, setBlackMaleOwe] = useState(0);
    const [BlackFemale, setBlackFemale] = useState(0);
    const [BlackFemaleOwe, setBlackFemaleOwe] = useState(0);

    const [HispanicMale, setHispanicMale] = useState(0);
    const [HispanicMaleOwe, setHispanicMaleOwe] = useState(0);
    const [HispanicFemale, setHispanicFemale] = useState(0);
    const [HispanicFemaleOwe, setHispanicFemaleOwe] = useState(0);

    const [AsianMale, setAsianMale] = useState(0);
    const [AsianMaleOwe, setAsianMaleOwe] = useState(0);
    const [AsianFemale, setAsianFemale] = useState(0);
    const [AsianFemaleOwe, setAsianFemaleOwe] = useState(0);

    const [IndigenousMale, setIndigenousMale] = useState(0);
    const [IndigenousMaleOwe, setIndigenousMaleOwe] = useState(0);
    const [IndigenousFemale, setIndigenousFemale] = useState(0);
    const [IndigenousFemaleOwe, setIndigenousFemaleOwe] = useState(0);

    const [HawaiianMale, setHawaiianMale] = useState(0);
    const [HawaiianMaleOwe, setHawaiianMaleOwe] = useState(0);
    const [HawaiianFemale, setHawaiianFemale] = useState(0);
    const [HawaiianFemaleOwe, setHawaiianFemaleOwe] = useState(0);

    const changeTotal = (text) => {
        setTotal(text)
    }

    const changeTip = (text) => {
        setTip(text)
    }

    const reset = () => {
        setTotal(0)
        setTip(0)
        setBill(0)
        setMale(0)
        setFemale(0)
        setMaleOwe(0)
        setFemaleOwe(0)
        setWhiteMale(0)
        setWhiteFemale(0)
        setWhiteMaleOwe(0)
        setWhiteFemaleOwe(0)
        setBlackMale(0)
        setBlackFemale(0)
        setBlackMaleOwe(0)
        setBlackFemaleOwe(0)
        setHispanicMale(0)
        setHispanicFemale(0)
        setHispanicMaleOwe(0)
        setHispanicFemaleOwe(0)
        setAsianMale(0)
        setAsianFemale(0)
        setAsianMaleOwe(0)
        setAsianFemaleOwe(0)
        setIndigenousMale(0)
        setIndigenousFemale(0)
        setIndigenousMaleOwe(0)
        setIndigenousFemaleOwe(0)
        setHawaiianMale(0)
        setHawaiianFemale(0)
        setHawaiianMaleOwe(0)
        setHawaiianFemaleOwe(0)
        setAdvanced(false)
    }

    const changePeople = (type) => {
        switch (type) {
            case 'minusFemale':
                if (Female - 1 < 0) {
                    return null
                }
                return setFemale(Female - 1);
            case 'plusFemale':
                return setFemale(Female + 1);

            case 'minusMale':
                if (Male - 1 < 0) {
                    return null
                }
                return setMale(Male - 1);
            case 'plusMale':
                return setMale(Male + 1);
            //------------------------------------------------
            case 'minusWhiteFemale':
                if (WhiteFemale - 1 < 0) {
                    return null
                }
                return setWhiteFemale(WhiteFemale - 1);
            case 'plusWhiteFemale':
                return setWhiteFemale(WhiteFemale + 1);

            case 'minusWhiteMale':
                if (WhiteMale - 1 < 0) {
                    return null
                }
                return setWhiteMale(WhiteMale - 1);
            case 'plusWhiteMale':
                return setWhiteMale(WhiteMale + 1);
            //------------------------------------------------
            case 'minusBlackFemale':
                if (BlackFemale - 1 < 0) {
                    return null
                }
                return setBlackFemale(BlackFemale - 1);
            case 'plusBlackFemale':
                return setBlackFemale(BlackFemale + 1);

            case 'minusBlackMale':
                if (BlackMale - 1 < 0) {
                    return null
                }
                return setBlackMale(BlackMale - 1);
            case 'plusBlackMale':
                return setBlackMale(BlackMale + 1);
            //------------------------------------------------
            case 'minusHispanicFemale':
                if (HispanicFemale - 1 < 0) {
                    return null
                }
                return setHispanicFemale(HispanicFemale - 1);
            case 'plusHispanicFemale':
                return setHispanicFemale(HispanicFemale + 1);

            case 'minusHispanicMale':
                if (HispanicMale - 1 < 0) {
                    return null
                }
                return setHispanicMale(HispanicMale - 1);
            case 'plusHispanicMale':
                return setHispanicMale(HispanicMale + 1);
            //------------------------------------------------
            case 'minusAsianFemale':
                if (AsianFemale - 1 < 0) {
                    return null
                }
                return setAsianFemale(AsianFemale - 1);
            case 'plusAsianFemale':
                return setAsianFemale(AsianFemale + 1);

            case 'minusAsianMale':
                if (AsianMale - 1 < 0) {
                    return null
                }
                return setAsianMale(AsianMale - 1);
            case 'plusAsianMale':
                return setAsianMale(AsianMale + 1);
            //------------------------------------------------
            case 'minusIndigenousFemale':
                if (IndigenousFemale - 1 < 0) {
                    return null
                }
                return setIndigenousFemale(IndigenousFemale - 1);
            case 'plusIndigenousFemale':
                return setIndigenousFemale(IndigenousFemale + 1);

            case 'minusIndigenousMale':
                if (IndigenousMale - 1 < 0) {
                    return null
                }
                return setIndigenousMale(IndigenousMale - 1);
            case 'plusIndigenousMale':
                return setIndigenousMale(IndigenousMale + 1);
            //------------------------------------------------
            case 'minusHawaiianFemale':
                if (HawaiianFemale - 1 < 0) {
                    return null
                }
                return setHawaiianFemale(HawaiianFemale - 1);
            case 'plusHawaiianFemale':
                return setHawaiianFemale(HawaiianFemale + 1);

            case 'minusHawaiianMale':
                if (HawaiianMale - 1 < 0) {
                    return null
                }
                return setHawaiianMale(HawaiianMale - 1);
            case 'plusHawaiianMale':
                return setHawaiianMale(HawaiianMale + 1);
            //------------------------------------------------

            default:
                return null
        }
    }

    const split = () => {
        if (WhiteMale === 0 && WhiteFemale === 0 && BlackMale === 0 && BlackFemale === 0 && HispanicMale === 0 && HispanicFemale === 0 && AsianMale === 0 && AsianFemale === 0 && IndigenousMale === 0 && IndigenousFemale === 0 && HawaiianMale === 0 && HawaiianFemale === 0) {
            EasySplit()
        } else {
            setAdvanced(true)
            AdvancedSplit()
        }
    }

    const EasySplit = () => {
        if (Total !== 0) {
            const TotalNum = parseInt(Total)
            const TipNum = parseInt(Tip)

            setBill(TotalNum + (TotalNum * (TipNum / 100)))

            const x = Male + (.79 * Female)
            const y = Bill / x

            Male > 0 ? setMaleOwe((y).toFixed(2)) : null
            Female > 0 ? setFemaleOwe((.79 * y).toFixed(2)) : null
        } else {
            return null
        }
    }

    const AdvancedSplit = () => {
        if (Total !== 0) {
            const TotalNum = parseInt(Total)
            const TipNum = parseInt(Tip)

            setBill(TotalNum + (TotalNum * (TipNum / 100)))

            const x = WhiteMale + (.8 * WhiteFemale) + (.87 * BlackMale) + (.74 * BlackFemale) + (.91 * HispanicMale) + (.74 * HispanicFemale) + (1.15 * AsianMale) + (.93 * AsianFemale) + (.91 * IndigenousMale) + (.74 * IndigenousFemale) + (.95 * HawaiianMale) + (.79 * HawaiianFemale)
            const y = Bill / x

            WhiteMale > 0 ? setWhiteMaleOwe((y).toFixed(2)) : null
            WhiteFemale > 0 ? setWhiteFemaleOwe((.8 * y).toFixed(2)) : null

            BlackMale > 0 ? setBlackMaleOwe((.87 * y).toFixed(2)) : null
            BlackFemale > 0 ? setBlackFemaleOwe((.74 * y).toFixed(2)) : null

            HispanicMale > 0 ? setHispanicMaleOwe((.91 * y).toFixed(2)) : null
            HispanicFemale > 0 ? setHispanicFemaleOwe((.74 * y).toFixed(2)) : null

            AsianMale > 0 ? setAsianMaleOwe((1.15 * y).toFixed(2)) : null
            AsianFemale > 0 ? setAsianFemaleOwe((.93 * y).toFixed(2)) : null

            IndigenousMale > 0 ? setIndigenousMaleOwe((.91 * y).toFixed(2)) : null
            setIndigenousFemale > 0 ? setIndigenousFemaleOwe((.74 * y).toFixed(2)) : null

            HawaiianMale > 0 ? setHawaiianMaleOwe((.95 * y).toFixed(2)) : null
            HawaiianFemale > 0 ? setHawaiianFemaleOwe((.79 * y).toFixed(2)) : null
        } else {
            return null
        }
    }



    return <ReceiptContext.Provider value={{
        Total,
        changeTotal,
        Tip,
        changeTip,
        Male,
        MaleOwe,
        Female,
        FemaleOwe,
        changePeople,
        Bill,
        split,
        Advanced,
        reset,
        AdvancedSplit,
        WhiteMale,
        WhiteMaleOwe,
        WhiteFemale,
        WhiteFemaleOwe,
        BlackMale,
        BlackMaleOwe,
        BlackFemale,
        BlackFemaleOwe,
        HispanicMale,
        HispanicMaleOwe,
        HispanicFemale,
        HispanicFemaleOwe,
        AsianMale,
        AsianMaleOwe,
        AsianFemale,
        AsianFemaleOwe,
        IndigenousMale,
        IndigenousMaleOwe,
        IndigenousFemale,
        IndigenousFemaleOwe,
        HawaiianMale,
        HawaiianMaleOwe,
        HawaiianFemale,
        HawaiianFemaleOwe,
    }}>
        {children}
    </ReceiptContext.Provider>
}

export default ReceiptContext;