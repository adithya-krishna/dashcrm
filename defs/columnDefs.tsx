import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

export interface LeadData {
  id: number;
  stage: string;
  stage_text: StageTextEnum | string;
  walkin_date: string;
  create_date: string;
  phone: string;
  email: string | null;
  lead_name: string;
  source: string;
  color_code: string;
  status: string;
  status_text: string;
  lead_owner: string;
  lead_campaign_name: string;
  ageing: string;
  location_name: string;
  location_id: number;
  next_followup: string;
  subject_intrested: string;
  demo_taken: number;
  area: string | null;
}

const columnHelper = createColumnHelper<LeadData>();

export enum StageTextEnum {
  "Due for Validation" = "Due for Validation",
  "Call Not Connected" = "Call Not Connected",
  "Prospective" = "Prospective",
  "Walkin Expected" = "Walkin Expected",
  "Cold" = "Cold",
  "Converted" = "Converted",
  "Walked In" = "Walked In",
  "Hot" = "Hot",
}

export function getStageColor(stageText: StageTextEnum): {
  bg: string;
  text: string;
} {
  switch (stageText) {
    case StageTextEnum["Due for Validation"]:
      return {
        bg: "bg-gray-100 dark:bg-gray-900",
        text: "text-gray-800 dark:text-gray-300",
      };
    case StageTextEnum["Call Not Connected"]:
      return {
        bg: "bg-orange-100 dark:bg-orange-900",
        text: "text-orange-800 dark:text-orange-300",
      };
    case StageTextEnum["Prospective"]:
      return {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-800 dark:text-blue-300",
      };
    case StageTextEnum["Walkin Expected"]:
      return {
        bg: "bg-teal-100 dark:bg-teal-900",
        text: "text-teal-800 dark:text-teal-300",
      };
    case StageTextEnum["Cold"]:
      return {
        bg: "bg-rose-100 dark:bg-rose-900",
        text: "text-rose-800 dark:text-rose-300",
      };
    case StageTextEnum["Converted"]:
      return {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-800 dark:text-green-300",
      };
    case StageTextEnum["Walked In"]:
      return {
        bg: "bg-cyan-100 dark:bg-cyan-900",
        text: "text-cyan-800 dark:text-cyan-300",
      };
    case StageTextEnum["Hot"]:
      return {
        bg: "bg-emerald-100 dark:bg-emerald-900",
        text: "text-emerald-800 dark:text-emerald-300",
      };
    default:
      // Fallback color if something unexpected happens
      return { bg: "bg-neutral-100", text: "text-neutral-800" };
  }
}

export const columns = [
  columnHelper.accessor("lead_name", {
    header: "Lead Name",
    cell: ({ getValue, row }) => {
      const email = row.original.email ?? "-";
      return (
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
            {getValue()}
          </p>
          <p
            title={email}
            className="truncate text-xs text-gray-500 dark:text-gray-100"
          >
            {email}
          </p>
        </div>
      );
    },
  }),
  columnHelper.accessor("stage_text", {
    header: "Stage Text",
    cell: ({ getValue }) => {
      const value = getValue() as StageTextEnum;
      const { bg, text } = getStageColor(value);
      return (
        <div className="w-36">
          <span
            className={`${bg} ${text}
            text-xs 
            font-medium 
            px-2.5 py-1 
            rounded-full`}
          >
            {value}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("subject_intrested", {
    header: "Subject",
    cell: ({ getValue }) => {
      const subject = getValue();
      return subject === "N/A" ? "-" : subject;
    },
  }),
  columnHelper.accessor("walkin_date", {
    header: "Walk-In Date",
    cell: ({ getValue }) => {
      const datetime = getValue();
      if (!datetime || datetime === "Not Set") return "-";
      return moment(datetime, "DD-MM-YYYY").format("MMM Do");
    },
  }),
  columnHelper.accessor("phone", {
    header: "Phone",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("source", {
    header: "Source",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("next_followup", {
    header: "Follow up",
    cell: ({ getValue }) => {
      const datetime = getValue();
      if (!datetime || datetime === "Not Set") return "-";
      return moment(datetime, "DD-MM-YYYY hh:mmA").format("MMM Do, hh:mm A");
    },
  }),
];
