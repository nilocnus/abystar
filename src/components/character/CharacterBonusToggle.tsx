import { Bonus } from '@/types/Character'
import Image from 'next/image'
import { useState } from 'react'
import Switch from 'react-switch'
import CustomSelect from './CustomSelect'

interface CharacterBonusToggleProps {
    bonus: Bonus
    onToggle: (bonus: Bonus, currentStacks: number) => void
    constellation: number
}

const CharacterBonusToggle = ({
    bonus,
    onToggle,
    constellation,
}: CharacterBonusToggleProps) => {
    const [currentStacks, setCurrentStacks] = useState(0)

    const handleCurrentStacksChange = (newCurrentStacks: number) => {
        setCurrentStacks(newCurrentStacks)
        onToggle(bonus, newCurrentStacks)
    }

    const isDisabled = Boolean(
        bonus.minConstellation && bonus.minConstellation > constellation
    )

    return (
        <label
            className={`flex items-center justify-between rounded-md bg-main-800 p-2 ${
                isDisabled ? 'brightness-50' : ''
            }`}
        >
            <div className="flex items-center gap-1">
                <div className="relative h-10 w-10">
                    <Image
                        className="flex flex-none shrink-0"
                        src={bonus.icon}
                        alt={bonus.name}
                        fill={true}
                        sizes="100%"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-md">{bonus.name}</span>
                    <span className="w-[21rem] max-w-full break-words text-xs text-lightgray-200">
                        {bonus.description}
                    </span>
                </div>
            </div>
            {bonus.maxStacks ? (
                <div className="!min-w-max">
                    <CustomSelect
                        options={[
                            { value: '0', label: 'Off' },
                            ...[...Array(bonus.maxStacks)].map((_, i) => ({
                                value: (i + 1).toString(),
                                label: `${i + 1}-Stack`,
                            })),
                        ]}
                        value={currentStacks.toString()}
                        onChange={(value) =>
                            handleCurrentStacksChange(parseInt(value))
                        }
                        disabled={isDisabled} // disable select if bonus is not available
                    />
                </div>
            ) : (
                <Switch
                    id={bonus.name}
                    checked={currentStacks > 0}
                    onChange={() =>
                        handleCurrentStacksChange(currentStacks > 0 ? 0 : 1)
                    }
                    uncheckedIcon={false}
                    checkedIcon={false}
                    disabled={isDisabled} // disable switch if bonus is not available
                />
            )}
        </label>
    )
}

export default CharacterBonusToggle