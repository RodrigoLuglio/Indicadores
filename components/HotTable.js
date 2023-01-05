import React, { useRef, useState, useEffect } from "react";

const HotTable = React.forwardRef((props, ref) => {
    const [loading, setLoading] = useState(true);
    const DynamicComponent = useRef(null);

    useEffect(() => {
        if (loading) {
            Promise.all([
                import("@handsontable/react"),
                // import language you need
                // import('handsontable/languages/ko-KR'),
            ]).then(([module]) => {
                DynamicComponent.current = module.HotTable;
                setLoading(false);
            });
        }
    }, [loading, setLoading]);

    if (loading || !DynamicComponent.current) return <div />;

    return <DynamicComponent.current {...props} ref={ref} />;
});
HotTable.displayName = "HotTable";
export default HotTable;
