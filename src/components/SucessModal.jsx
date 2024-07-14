const SucessModal = ({ isVisible }) => {
    return (
        <aside className={`${isVisible ? "top-6 opacity-100" : "-top-40 opacity-0"} fixed bg-very_dark_green rounded-xl p-7 mx-modal_margin transition-all`}>
            <div className="grid gap-2">
                <p className="text-white flex items-center space-x-3">
                    <img src="/images/icon-success-check.svg" alt="sucess-arrow" />
                    <span>Message Sent!</span>
                </p>
                <p className="text-grey_500">Thanks for completing the form. We'll be in touch soon!</p>
            </div>
        </aside>
    )
}

export default SucessModal