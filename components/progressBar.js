import { FullCard} from "../components/misc";
import { Slider, createStyles } from '@mantine/core';
import { marks, progressStyles } from "../services/progress";

const useStyles = createStyles((theme) => progressStyles(theme) );

const ProgressBar = ({value, company }) => {

    const { name, avatar } = company;

    const { classes } = useStyles();

    return (
        <FullCard>
            <div className="relative w-full flex items-center justify-end py-6">
                <div className="absolute top-5 left-0 w-[30px] h-[30px] rounded-lg bg-red-300 -translate-y-4 overflow-hidden">
                    <img src={avatar}  alt={name} />
                </div>
                <div className="absolute top-1 left-10 font-gotham_medium text-paragraph text-sm">{name}</div>
                <div className="w-progressbar">
                    <Slider
                        color="gray"
                        marks={marks}
                        classNames={{
                            track: classes.track,
                            bar: classes.bar,
                            mark: classes.mark,
                            markFilled: classes.markFilled,
                            markLabel: classes.markLabel,
                            thumb: classes.thumb
                        }}
                        value={value}
                    />
                </div>
            </div>
        </FullCard>
    );
}

export default ProgressBar;