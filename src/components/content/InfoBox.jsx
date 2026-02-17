import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

const config = {
    tip: {
        bgColor: 'bg-blue-50 dark:bg-blue-950/20',
        borderColor: 'border-blue-200 dark:border-blue-900',
        textColor: 'text-blue-900 dark:text-blue-100',
        icon: Info,
        label: 'İpucu',
    },
    warning: {
        bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
        borderColor: 'border-yellow-200 dark:border-yellow-900',
        textColor: 'text-yellow-900 dark:text-yellow-100',
        icon: AlertTriangle,
        label: 'Diqqət',
    },
    error: {
        bgColor: 'bg-red-50 dark:bg-red-950/20',
        borderColor: 'border-red-200 dark:border-red-900',
        textColor: 'text-red-900 dark:text-red-100',
        icon: AlertCircle,
        label: 'Xəta',
    },
    success: {
        bgColor: 'bg-green-50 dark:bg-green-950/20',
        borderColor: 'border-green-200 dark:border-green-900',
        textColor: 'text-green-900 dark:text-green-100',
        icon: CheckCircle2,
        label: 'Uğurlu',
    },
};

export default function InfoBox({ type = 'tip', title, children }) {
    const { bgColor, borderColor, textColor, icon: Icon, label } = config[type] || config.tip;

    return (
        <div className={`my-6 p-4 rounded-lg border-l-4 ${bgColor} ${borderColor} ${textColor}`}>
            <div className="flex gap-3">
                <Icon size={20} className="flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">
                        {title || label}
                    </h4>
                    <div className="text-sm prose dark:prose-invert max-w-none">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
