import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/AirPlanFinder.css'
// Environment options for the first step
const environments = [
    { id: 'alpine', emoji: '🌲', label: 'Alpine', sub: 'Crisp & clean' },
    { id: 'coastal', emoji: '🌊', label: 'Coastal', sub: 'Fresh & open' },
    { id: 'cloud', emoji: '☁️', label: 'Cloud', sub: 'Soft & calm' },
    { id: 'volcanic', emoji: '🌋', label: 'Volcanic', sub: 'Bold & intense' },
]

// Purpose options for the second step.
const purposes = [
    {
        id: 'focus',
        emoji: '🧠',
        label: 'Focus',
        sub: 'Clear my head and get things done.',
    },
    {
        id: 'energy',
        emoji: '⚡',
        label: 'Energy',
        sub: 'Give me a little extra momentum.',
    },
    {
        id: 'relax',
        emoji: '😌',
        label: 'Relaxation',
        sub: 'Slow everything down.',
    },
    {
        id: 'sleep',
        emoji: '🌙',
        label: 'Better Sleep',
        sub: 'Help me wind down.',
    },
]

// Ritual options for the third step
const rituals = [
    {
        id: 'morning',
        emoji: '🌅',
        label: 'Morning',
        sub: 'Start the day fresh.',
    },
    {
        id: 'workday',
        emoji: '💻',
        label: 'Workday',
        sub: 'Keep me sharp and steady.',
    },
    {
        id: 'evening',
        emoji: '🌆',
        label: 'Evening',
        sub: 'Leave the day behind.',
    },
    {
        id: 'latenight',
        emoji: '🌙',
        label: 'Late Night',
        sub: 'Quiet hours, clear air.',
    },
]

const airNames = {
    alpine: {
        focus: 'Peak Focus',
        energy: 'Mountain Charge',
        relax: 'Mountain Exhale',
        sleep: 'Alpine Dusk',
    },

    coastal: {
        focus: 'Coastal Focus',
        energy: 'Coastal Charge',
        relax: 'Ocean Exhale',
        sleep: 'Moonlit Tide',
    },

    cloud: {
        focus: 'Cloud Nine Focus',
        energy: 'Cloud Lift',
        relax: 'Soft Drift',
        sleep: 'Cloud Dream',
    },

    volcanic: {
        focus: 'Ember Focus',
        energy: 'Ember Rush',
        relax: 'Volcanic Calm',
        sleep: 'Volcanic Dusk',
    },
}

// Short labels for the persona in the result
const persona = {
    focus: 'ARCHITECT',
    energy: 'CHARGER',
    relax: 'ZEN',
    sleep: 'DREAMER',
}

// Extra detail for the selected ritual
const ritualDescriptions = {
    morning: 'Best enjoyed while the world is still waking up.',
    workday: 'Best enjoyed with headphones, coffee, and fewer distractions.',
    evening: 'Best enjoyed when the workday is finally behind you.',
    latenight: 'Best enjoyed when everyone else has gone to sleep.',
}

// Build the final recommendation from selected answers
function getResult(environmentId, purposeId, ritualId) {
    const env = environments.find((item) => item.id === environmentId)
    const purpose = purposes.find((item) => item.id === purposeId)
    const ritual = rituals.find((item) => item.id === ritualId)

    if (!env || !purpose || !ritual) {
        return null
    }
    //Metrics for each environment and purpose combination, used to calculate the final recommendation
    const metrics = {
        alpine: {
            focus: [94, 72, 88],
            energy: [90, 60, 96],
            relax: [88, 94, 64],
            sleep: [90, 96, 48],
        },

        coastal: {
            focus: [82, 78, 78],
            energy: [80, 72, 88],
            relax: [76, 94, 62],
            sleep: [78, 96, 52],
        },

        cloud: {
            focus: [72, 90, 66],
            energy: [68, 76, 72],
            relax: [64, 98, 54],
            sleep: [68, 98, 42],
        },

        volcanic: {
            focus: [66, 52, 94],
            energy: [62, 48, 99],
            relax: [58, 72, 76],
            sleep: [62, 78, 58],
        },
    }
    // Calculate the overall score and determine the recommended plan
    const [crisp, calm, energy] = metrics[environmentId][purposeId]
    const overallScore = Math.round((crisp + calm + energy) / 3)

    let plan = 'Casual Breather'
    if (overallScore >= 80) {
        plan = 'Enterprise Lung'
    } else if (overallScore >= 65) {
        plan = 'Power Inhaler'
    }
    // Build the final result object with all the necessary information
    const title = `THE ${env.label.toUpperCase()} ${persona[purposeId]}`
    const recommendedAtmosphere = airNames[environmentId][purposeId]
    const ritualDesc = `You chose ${env.label.toLowerCase()} air for ${purpose.label.toLowerCase()},
                 especially during your ${ritual.label.toLowerCase()} routine.`
    const nostrilCompatibility = Math.min(99, Math.round((crisp + calm + energy) / 3))

    return {
        title,
        ritualDesc,
        recommendedAtmosphere,
        ritualDescriptions: ritualDescriptions[ritualId],
        plan,
        crisp,
        calm,
        energy,
        nostrilCompatibility,
        environmentEmoji: env.emoji,
        purposeEmoji: purpose.emoji,
        ritualEmoji: ritual.emoji,
    }
}

export default function AirPlanFinder() {
    const [step, setStep] = useState(1)
    const [environment, setEnvironment] = useState(null)
    const [purpose, setPurpose] = useState(null)
    const [ritual, setRitual] = useState(null)
    const navigate = useNavigate()

    const result = getResult(environment, purpose, ritual)
    // Determine if the user can continue to the next step based on their selections
    const canContinue = step === 1 ? !!environment
        : step === 2 ? !!purpose
            : step === 3 ? !!ritual
                : true
    // Handle navigation between steps and resetting the form
    function handleNext() {
        if (step === 1 && !environment) return
        if (step === 2 && !purpose) return
        if (step === 3 && !ritual) return

        setStep((current) => Math.min(4, current + 1))
    }
    // Handle going back to the previous step
    function handleBack() {
        setStep((current) => Math.max(1, current - 1))
    }

    // Handle restarting the form and clearing all selections
    function handleRestart() {
        setStep(1)
        setEnvironment(null)
        setPurpose(null)
        setRitual(null)
    }

    // Navigate to the pricing page with the plans section
    function handlePricing() {
        navigate('/pricing#plans')
    }

    return (
        <section className="airplan-wrapper">
            <div className="airplan-inner">
                <div className="airplan-top">
                    <h2 className="airplan-title">Find Your Air Plan</h2>
                    <p className="airplan-sub">Let's find the atmosphere that fits you.</p>
                </div>

                <div className="step-panels">
                    <div className={`step-panel ${step === 1 ? 'active' : ''}`}>
                        <div className="step-panel-inner">
                            <div className="step-label">Step 1</div>
                            <h3 className="step-question">What's your ideal environment?</h3>
                            <div className="card-grid">
                                {environments.map((item) => (
                                    <button key={item.id} type="button" onClick={() => setEnvironment(item.id)}
                                        className={`finder-card ${environment === item.id ? 'selected' : ''}`}>
                                        <div className="card-emoji">{item.emoji}</div>
                                        <div className="card-title">{item.label}</div>
                                        <div className="card-subtitle">{item.sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`step-panel ${step === 2 ? 'active' : ''}`}>
                        <div className="step-panel-inner">
                            <div className="step-label">Step 2</div>
                            <h3 className="step-question">What are you breathing for?</h3>
                            <div className="card-grid">
                                {purposes.map((item) => (
                                    <button key={item.id} type="button" onClick={() => setPurpose(item.id)}
                                        className={`finder-card ${purpose === item.id ? 'selected' : ''}`}
                                    >
                                        <div className="card-emoji">{item.emoji}</div>
                                        <div className="card-title">{item.label}</div>
                                        <div className="card-subtitle">{item.sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`step-panel ${step === 3 ? 'active' : ''}`}>
                        <div className="step-panel-inner">
                            <div className="step-label">Step 3</div>

                            <h3 className="step-question">
                                What's your ideal air ritual?
                            </h3>

                            <div className="card-grid">
                                {rituals.map((item) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setRitual(item.id)}
                                        className={`finder-card ${ritual === item.id ? 'selected' : ''
                                            }`}
                                    >
                                        <div className="card-emoji">{item.emoji}</div>
                                        <div className="card-title">{item.label}</div>
                                        <div className="card-subtitle">{item.sub}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`step-panel ${step === 4 ? 'active' : ''}`}>
                        <div className={`step-panel-inner result-card ${environment || 'alpine'}`}>
                            {result ? (
                                <>
                                    <div className="result-badge">
                                        ✨ Your air profile is ready
                                    </div>

                                    <h3 className="result-heading">
                                        {result.title}
                                    </h3>

                                    <p className="result-description">
                                        {result.ritualDesc}
                                    </p>

                                    <div className="air-recipe">
                                        <div className="recipe-label">
                                            YOUR AIR RECIPE
                                        </div>

                                        <div className="recipe-icons">
                                            <span>{result.environmentEmoji}</span>
                                            <span>+</span>
                                            <span>{result.purposeEmoji}</span>
                                            <span>+</span>
                                            <span>{result.ritualEmoji}</span>
                                        </div>

                                        <h4>{result.recommendedAtmosphere}</h4>

                                        <p>{result.ritualDesc}</p>
                                    </div>

                                    <div className="metric-row">
                                        <div>
                                            <div className="metric-label">Crispness</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${result.crisp}%` }} />
                                            </div>
                                        </div>
                                        <div>{result.crisp}%</div>
                                    </div>
                                    <div className="metric-row">
                                        <div>
                                            <div className="metric-label">Calm</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${result.calm}%` }} />
                                            </div>
                                        </div>
                                        <div>{result.calm}%</div>
                                    </div>

                                    <div className="metric-row">
                                        <div>
                                            <div className="metric-label">Energy</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${result.energy}%` }} />
                                            </div>
                                        </div>
                                        <div>{result.energy}%</div>
                                    </div>

                                    <div className="recommendation">Your recommended plan: {result.plan}</div>
                                    <button type="button" className="button-primary" onClick={handlePricing}>
                                        Experience Your Air →
                                    </button>
                                    <div className="nostril-copy">
                                        Nostril compatibility: {result.nostrilCompatibility}% — Your nostrils have excellent taste.
                                    </div>
                                </>
                            ) : (
                                <p className="result-description">Please complete all steps to reveal your air plan.</p>
                            )}
                        </div>
                    </div>
                </div>
                {/* // Navigation buttons for moving between steps and restarting the form */}
                <div className="actions">
                    {step > 1 && step < 4 && (
                        <button  type="button" className="button-secondary" onClick={handleBack}>
                            Back
                        </button>
                    )}
                    {step < 4 && canContinue && (
                        <button type="button" className="button-primary" onClick={handleNext} >
                            {step === 3 ? 'Reveal My Air Plan →' : 'Next →'}
                        </button>
                    )}
                    {step === 4 && (
                        <button  type="button" className="button-secondary" onClick={handleRestart} >
                            Restart
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
