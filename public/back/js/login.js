/**
 * Created by STAR on 2018-03-02.
 */
//ʹ�ñ�У����
$(formSelector).bootstrapValidator({
    //1. ָ����У������ͣ�Ĭ��Ϊ[':disabled', ':hidden', ':not(:visible)'],���Բ�����
    excluded: [':disabled', ':hidden', ':not(:visible)'],

    //2. ָ��У��ʱ��ͼ����ʾ��Ĭ����bootstrap���
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    //3. ָ��У���ֶ�
    fields: {
        //У���û�������Ӧname����name����
        username: {
            validators: {
                //����Ϊ��
                notEmpty: {
                    message: '�û�������Ϊ��'
                },
                //����У��
                stringLength: {
                    min: 2,
                    max: 6,
                    message: '�û������ȱ�����6��30֮��'
                },
                //����У��
                regexp: {
                    regexp: /^[a-zA-Z0-9_\.]+$/,
                    message: '�û�����������ĸ�»��ߺ�.���'
                }
            }
        },
    }

});