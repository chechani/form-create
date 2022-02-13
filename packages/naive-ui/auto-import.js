import {
    NButton,
    NForm,
    NFormItem,
    NInputGroup,
    NInputGroupLabel,
    NInput,
    NInputNumber,
    NAutoComplete,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NColorPicker,
    NDatePicker,
    NTimePicker,
    NRadio,
    NRadioGroup,
    NRadioButton,
    NRate,
    NSelect,
    NSlider,
    NUpload,
    NTree,
    NTooltip,
    NPopover,
    NModal,
    NGrid,
    NGridItem,
    NRow,
    NCol,
    NDynamicTags,
    NIcon,
    NSwitch,
    create
} from 'naive-ui';

const naive = create({
    components: [
        NButton,
        NForm,
        NFormItem,
        NInputGroup,
        NInputGroupLabel,
        NInput,
        NInputNumber,
        NAutoComplete,
        NCascader,
        NCheckbox,
        NCheckboxGroup,
        NColorPicker,
        NDatePicker,
        NTimePicker,
        NRadio,
        NRadioGroup,
        NRadioButton,
        NRate,
        NSelect,
        NSlider,
        NSwitch,
        NUpload,
        NTree,
        NTooltip,
        NPopover,
        NModal,
        NGrid,
        NGridItem,
        NRow,
        NCol,
        NDynamicTags,
        NIcon,
    ]
})

export default function install(formCreate) {
    formCreate.useApp((_, app) => {
        app.use(naive);
    });
}
